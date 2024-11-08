import { useState } from "react";
import visa from "../assets/Image/visa.png";
import master from "../assets/Image/master.png";
import skrill from "../assets/Image/skrill.png";
import gpay from "../assets/Image/google.png";
import apay from "../assets/Image/apple.png";
import paypal from "../assets/Image/paypal.png";
import { useNavigate } from "react-router-dom";

const Paymentmethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    nameOnCard: "",
    expireDate: "",
    cvvCode: "",
  });
  const [primaryCard, setPrimaryCard] = useState(false);
  const [saveCard, setSaveCard] = useState(false);
  const navigate = useNavigate();
  

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "cvvCode") {
      if (value.length > 3) return;
      setCardDetails((prev) => ({
        ...prev,
        cvvCode: value.replace(/\D/g, ""),
      }));
    } else if (name === "cardNumber") {
      let cardValue = value.replace(/\D/g, "");
      let formattedValue = cardValue.replace(/(\d{4})(?=\d)/g, "$1 ");
      if (formattedValue.length <= 19) {
        setCardDetails((prev) => ({
          ...prev,
          cardNumber: formattedValue,
        }));
      }
    }
    if (name === "expireDate") {
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d{0,2})$/, "$1/$2");
      if (formattedValue.length <= 5) {
        setCardDetails((prev) => ({
          ...prev,
          expireDate: formattedValue,
        }));
      }
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details: ", {
      paymentMethod,
      cardDetails,
      primaryCard,
      saveCard,
    });
    alert("Payment successful!");
  };

  const handelpayment = () => {
    
navigate("/tutornavbar/calandertimeselect");
  };

  return (
    <>
      <div className="font-urbanist p-3">
        <form onSubmit={handleFormSubmit}>
          <div className="border-[1px] border-black/60 space-y-3 rounded-xl p-3">
            <div className="space-y-3 md:space-y-0 md:flex md:justify-between">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="creditDebit"
                  name="paymentMethod"
                  value="credit/debit"
                  onChange={handlePaymentMethodChange}
                  checked={paymentMethod === "credit/debit"}
                  className="w-4 h-4 text-primary border-gray-300 focus:ring-primary peer"
                />
                <label
                  htmlFor="creditDebit"
                  className="peer-checked:text-primary text-[#040404] font-semibold text-[17px] xl:text-xl">
                  Credit / Debit Card
                </label>
              </div>

              <div className="flex space-x-3">
                <div className="border-[1px] p-2 px-2 my-auto border-[#BABABA] rounded-md">
                  <img className="w-10 h-4 my-auto" src={visa} alt="visa" />
                </div>
                <div className="border-[1px] p-2 px-2 my-auto border-[#BABABA] rounded-md">
                  <img className="w-10 h-4 my-auto" src={master} alt="master" />
                </div>
                <div className="border-[1px] p-2 px-2 my-auto border-[#BABABA] rounded-md">
                  <img className="w-10 h-4 my-auto" src={skrill} alt="skrill" />
                </div>
                <div className="border-[1px] flex p-1  my-auto px-2 border-[#BABABA] rounded-md">
                  <img className="w-4 h-4 my-auto" src={gpay} alt="googlepay" />
                  <p className="text-[#4D4D4D] my-auto ml-[1px] font-medium text-sm">
                    Pay
                  </p>
                </div>
                <div className="border-[1px]  flex p-1 px-2 my-auto border-[#BABABA] rounded-md">
                  <img className="w-5 h-5 my-auto" src={apay} alt="applepay" />
                  <p className="font-medium text-sm ml-[1px] my-auto">Pay</p>
                </div>
              </div>
            </div>
            <p className=" hidden lg:flex text-[13px] xl:text-lg font-medium text-[#7B7B7B]">
              Pay securely using your Bank Account using Visa, Mastercard,
              Skrill, GooglePay and ApplePay.
            </p>

            {paymentMethod === "credit/debit" && (
              <div className="space-y-3">
                <div className="space-y-1">
                  <label
                    htmlFor="cardNumber"
                    className="font-semibold text-[#040404] text-[17px] xl:text-lg">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    value={cardDetails.cardNumber}
                    onChange={handleCardInputChange}
                    placeholder="xxx xxx xxx xxx"
                    className="w-full p-2 border-[1px]  border-black/75 rounded-md focus:outline-primary"
                  />
                </div>
                <div className="space-y-1">
                  <label
                    htmlFor="nameOnCard"
                    className="font-semibold text-[#040404] text-[17px] xl:text-lg">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    name="nameOnCard"
                    value={cardDetails.nameOnCard}
                    onChange={handleCardInputChange}
                    placeholder="Name on Card"
                    className="w-full p-2 border-[1px] border-black/75 rounded-md focus:outline-primary"
                  />
                </div>
                <div className=" space-y-2 lg:space-y-0 lg:flex lg:space-x-5 ">
                  <div className="space-y-1 lg:w-1/2">
                    <label
                      htmlFor="expireDate"
                      className="font-semibold text-[#040404] text-[17px] xl:text-lg">
                      Expire Date
                    </label>
                    <input
                      type="text"
                      name="expireDate"
                      value={cardDetails.expireDate}
                      onChange={handleCardInputChange}
                      placeholder="MM/YY"
                      maxLength="5"
                      className="w-full p-2 border-[1px] border-black/75 rounded-md focus:outline-primary"
                    />
                  </div>
                  <div className="space-y-1 lg:w-1/2">
                    <label
                      htmlFor="cvvCode"
                      className="font-semibold text-[#040404] text-[17px] xl:text-lg">
                      CVV Code
                    </label>
                    <input
                      type="text"
                      name="cvvCode"
                      value={cardDetails.cvvCode}
                      onChange={handleCardInputChange}
                      placeholder="xxx"
                      maxLength="3"
                      className="w-full p-2 border-[1px] border-black/75 rounded-md focus:outline-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className=" space-y-3">
              <div className="space-y-1">
                <input
                  type="checkbox"
                  name="primaryCard"
                  checked={primaryCard}
                  onChange={() => setPrimaryCard(!primaryCard)}
                  className="text-primary focus:ring-primary my-auto"
                />
                <label className="text-[#3F3F3F] my-auto font-semibold text-[13px] xl:text-lg">
                  {" "}
                  Make this primary card
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="saveCard"
                  checked={saveCard}
                  onChange={() => setSaveCard(!saveCard)}
                  className="text-primary focus:ring-primary"
                />
                <label className="text-[#3F3F3F] my-auto font-semibold text-[13px] xl:text-lg">
                  {" "}
                  Save card for future payments
                </label>
              </div>
            </div>

            <div className="border-b-[1px] border-black/80 pb-1">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    onChange={handlePaymentMethodChange}
                    checked={paymentMethod === "paypal"}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary peer"
                  />
                  <label
                    htmlFor="paypal"
                    className="peer-checked:text-primary text-[#3F3F3F] font-semibold text-[17px] xl:text-xl">
                    Paypal
                  </label>
                </div>
                <div className="border-[1px] p-1 px-2 my-auto border-[#BABABA] rounded-md">
                  <img className="w-14 h-4 my-auto" src={paypal} alt="paypal" />
                </div>
              </div>
              <p className="text-[10px] font-medium text-[#7B7B7B] xl:text-lg">
                You will be redirected to PayPal website to complete your order
                securely.
              </p>
            </div>

            <div className="border-b-[1px] border-black/80 pb-1 ">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id="cod"
                    name="paymentMethod"
                    value="cod"
                    onChange={handlePaymentMethodChange}
                    checked={paymentMethod === "cod"}
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary peer"
                  />
                  <label
                    htmlFor="cod"
                    className="peer-checked:text-primary text-[#3F3F3F] font-semibold text-[17px] xl:text-xl">
                    Cash on delivery
                  </label>
                </div>
                <div className="border-[1px] p-1 px-3 my-auto border-[#BABABA] rounded-md">
                  <h3 className="text-primary text-base font-semibold">COD</h3>
                </div>
              </div>
              <p className="text-[10px] font-medium text-[#7B7B7B] xl:text-lg">
                Pay with cash when your order is delivered.
              </p>
            </div>

            <div className="flex justify-between">
              <div>
                <h3 className="text-xl xl:text-3xl font-bold">
                  Total Amount: $260
                </h3>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handelpayment}
                  className="text-white bg-primary p-1 px-2 font-bold xl:text-xl rounded-md">
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Paymentmethod;
