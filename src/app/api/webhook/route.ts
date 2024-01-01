import { createBooking, updateHotelRoom } from "@/libs/apis";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const checkout_session_completed = "checkout.session.completed";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2023-10-16",
});

export async function POST(req: Request, res: Response) {
  const reqBody = await req.text();
  const sig = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !webhookSecret) {
    console.error("Missing signature or webhook secret");
    return new NextResponse("Invalid request", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(reqBody, sig, webhookSecret);
  } catch (error: any) {
    console.error(`Webhook Error: ${error.message}`);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 500 });
  }

  // Handle the event
  switch (event.type) {
    case checkout_session_completed:
      const session = event.data.object;
      const {
        // @ts-ignore
        metadata: {
          // @ts-ignore
          adults,
          // @ts-ignore
          checkinDate,
          // @ts-ignore
          checkoutDate,
          // @ts-ignore
          children,
          // @ts-ignore
          hotelRoom,
          // @ts-ignore
          numberOfDays,
          // @ts-ignore
          user,
          // @ts-ignore
          discount,
          // @ts-ignore
          totalPrice,
        },
      } = session;

      // Create a booking or perform other actions as needed
      await createBooking({
        adults: Number(adults),
        checkinDate,
        checkoutDate,
        children: Number(children),
        hotelRoom,
        numberOfDays: Number(numberOfDays),
        discount: Number(discount),
        totalPrice: Number(totalPrice),
        user,
      });

      //Update hotel room
      await updateHotelRoom(hotelRoom);

      return new NextResponse("Booking successful", {
        status: 200,
        statusText: "Booking successful",
      });

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return new NextResponse("Event received", {
    status: 200,
    statusText: "Event received",
  });
}
