import { Fragment } from "react";

export default function OrderSuccess() {
  return (
    <Fragment>
      <div class="row justify-content-center">
        <div class="col-6 mt-5 text-center">
          <img
            class="my-5 img-fluid d-block mx-auto"
            src="/images/success.png"
            alt="Order Success"
            width="200"
            height="200"
          />

          <h2>Your Order has been placed successfully.</h2>

          <a href="/orders">Go to Orders</a>
        </div>
      </div>
    </Fragment>
  );
}
