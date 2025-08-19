import "./testingPage.css";

const Clock = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="w-[1rem] h-[1rem]"
  >
    <path
      d="M12 6L12 12L18 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const Phone = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="w-[1.375rem] h-[1.375rem] text-primary"
  >
    <path
      d="M12.0788 9.80394L9.33334 10.3359C7.47886 9.40514 6.33334 8.33594 5.66667 6.66927L6.17997 3.91587L5.20968 1.33594L2.45943 1.33594C1.8444 1.33594 1.35959 1.84362 1.44224 2.45306C1.68499 4.24298 2.47273 7.80866 5.00001 10.3359C7.65277 12.9887 11.5269 14.0712 13.4665 14.467C14.1036 14.597 14.6667 14.1006 14.6667 13.4504L14.6667 10.7901L12.0788 9.80394Z"
      stroke="currentColor"
      strokeWidth="0.818182"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const WhatsappOutline = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="29"
    viewBox="0 0 29 29"
    fill="none"
    className="w-[1.70381rem] h-[1.70381rem] text-secondary"
  >
    <path
      d="M14.5008 2.57422C7.92022 2.57422 2.57422 7.92022 2.57422 14.5008C2.57422 16.6161 3.15431 18.5901 4.12176 20.3133L2.59346 25.7692C2.56905 25.8565 2.56794 25.9487 2.59026 26.0365C2.61258 26.1244 2.65754 26.2049 2.72067 26.2699C2.78379 26.335 2.86287 26.3824 2.95001 26.4074C3.03716 26.4323 3.12933 26.434 3.21734 26.4123L8.90619 25.0025C10.5778 25.8949 12.4747 26.4275 14.5008 26.4275C21.0815 26.4275 26.4275 21.0815 26.4275 14.5008C26.4275 7.92022 21.0815 2.57422 14.5008 2.57422ZM14.5008 3.61132C20.521 3.61132 25.3904 8.48073 25.3904 14.5008C25.3904 20.521 20.521 25.3904 14.5008 25.3904C12.5708 25.3904 10.7632 24.8872 9.1918 24.0079C9.07687 23.9437 8.94181 23.9256 8.81403 23.9573L3.83211 25.1919L5.16798 20.4257C5.18709 20.3583 5.19237 20.2878 5.18349 20.2183C5.17462 20.1489 5.15177 20.082 5.11632 20.0216C4.16134 18.4022 3.61132 16.5181 3.61132 14.5008C3.61132 8.48073 8.48073 3.61132 14.5008 3.61132ZM10.1671 8.27826C9.8347 8.27826 9.35998 8.40193 8.97 8.82213C8.73576 9.07452 7.75971 10.0255 7.75971 11.6974C7.75971 13.4406 8.96865 14.9446 9.11482 15.1379H9.11584V15.1389C9.10197 15.1207 9.30137 15.4094 9.56754 15.7557C9.83371 16.1019 10.2059 16.5567 10.6735 17.049C11.6087 18.0337 12.9236 19.1716 14.5555 19.8676C15.3071 20.1877 15.9 20.3809 16.3492 20.5219C17.1817 20.7833 17.9399 20.7436 18.5095 20.6596C18.9358 20.5968 19.4047 20.3921 19.8686 20.0985C20.3326 19.8049 20.7873 19.4399 20.9878 18.8852C21.1314 18.4876 21.2044 18.1201 21.2308 17.8177C21.244 17.6666 21.2457 17.5331 21.2359 17.4096C21.2261 17.2861 21.2366 17.1914 21.1215 17.0024C20.88 16.6061 20.6066 16.5957 20.3214 16.4545C20.1629 16.3761 19.7116 16.1557 19.2589 15.94C18.8068 15.7246 18.4153 15.5338 18.1742 15.4478C18.0219 15.393 17.8359 15.3141 17.5676 15.3445C17.2992 15.3749 17.0342 15.5685 16.8799 15.7972C16.7336 16.014 16.1449 16.709 15.9653 16.9133C15.963 16.9119 15.9785 16.919 15.9076 16.8839C15.6856 16.7741 15.4141 16.6806 15.0123 16.4687C14.6105 16.2568 14.1079 15.9438 13.5579 15.459V15.4579C12.7394 14.7373 12.166 13.8325 11.9851 13.5286C11.9973 13.5141 11.9836 13.5316 12.0094 13.5063L12.0104 13.5053C12.1953 13.3232 12.3591 13.1057 12.4975 12.9462C12.6938 12.7201 12.7805 12.5207 12.8743 12.3345C13.0613 11.9633 12.9572 11.5548 12.849 11.3399V11.3389C12.8565 11.3538 12.7905 11.2081 12.7193 11.0401C12.648 10.8717 12.5572 10.6532 12.4601 10.4203C12.2659 9.95447 12.0492 9.43199 11.9203 9.12597V9.12495C11.7684 8.76449 11.563 8.50482 11.2944 8.37954C11.0257 8.25426 10.7884 8.28988 10.7788 8.2894H10.7778C10.5861 8.28056 10.3758 8.27826 10.1671 8.27826ZM10.1671 9.31536C10.367 9.31536 10.5641 9.3178 10.7292 9.32549C10.899 9.33395 10.8885 9.33464 10.8558 9.31941C10.8226 9.30393 10.8677 9.29891 10.9642 9.52804C11.0904 9.82769 11.3082 10.3521 11.503 10.8194C11.6004 11.053 11.6915 11.2723 11.7643 11.4442C11.8371 11.6162 11.8765 11.7122 11.9223 11.8038V11.8048L11.9233 11.8058C11.9682 11.8944 11.9642 11.8377 11.9486 11.8686C11.8392 12.0858 11.8243 12.1391 11.7136 12.2666C11.5451 12.4608 11.3732 12.6773 11.2822 12.767C11.2026 12.8452 11.0589 12.967 10.9692 13.2055C10.8794 13.4443 10.9213 13.7721 11.0655 14.0167C11.2573 14.3425 11.8896 15.3717 12.8723 16.2368C13.4911 16.7823 14.0676 17.1433 14.5282 17.3863C14.9888 17.6292 15.3639 17.7711 15.4478 17.8127C15.6471 17.9113 15.865 17.9879 16.1183 17.9575C16.3716 17.9271 16.59 17.7734 16.729 17.6162L16.73 17.6152C16.915 17.4054 17.4648 16.7777 17.7286 16.3907C17.7398 16.3947 17.7361 16.3916 17.8238 16.4231V16.4241H17.8248C17.8649 16.4384 18.3663 16.6628 18.8133 16.8758C19.2604 17.0889 19.7141 17.3103 19.8616 17.3833C20.0743 17.4886 20.1749 17.5571 20.2008 17.5575C20.2026 17.6031 20.2044 17.6525 20.1978 17.7276C20.1796 17.9359 20.1239 18.2241 20.0125 18.5328C19.9578 18.6839 19.6734 18.9955 19.3146 19.2225C18.9559 19.4495 18.5193 19.6099 18.3576 19.6337C17.8714 19.7053 17.2941 19.7315 16.6601 19.5324C16.2205 19.3944 15.6724 19.2158 14.9627 18.9136C13.5233 18.2997 12.2999 17.2551 11.426 16.335C10.9891 15.875 10.639 15.4467 10.3899 15.1227C10.1413 14.7993 10.0328 14.631 9.94228 14.512L9.94126 14.511C9.7806 14.2985 8.79681 12.9301 8.79681 11.6974C8.79681 10.3929 9.40273 9.88132 9.7306 9.52804C9.90273 9.34258 10.0909 9.31536 10.1671 9.31536Z"
      fill="#383838"
    />
  </svg>
);

export const TestingPage = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="container">
            <ul className="header-top-list">
              <li className="header-top-item">
                <Phone />

                <p className="item-title">Call Us :</p>

                <a href="tel:16475333813" className="item-link">
                  +1 (647) 533 3813
                </a>
              </li>

              <li className="header-top-item">
                <Clock />

                <p className="item-title">Opening Hour :</p>

                <p className="item-text">Sunday - Friday, 08 am - 09 pm</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="header-bottom" data-header>
          <div className="container">
            <a href="#" className="logo">
              Auto Recycling
              <span className="span">Vehicle scrap and part out</span>
            </a>

            <a href="https://wa.me/16475333813" className="btn has-before">
              <span className="span">Whatsapp Message</span>

              <WhatsappOutline />
            </a>
          </div>
        </div>
      </header>

      <main>
        <article>
          <section
            className="section hero has-before has-bg-image"
            id="home"
            aria-label="home"
            style={{
              backgroundImage: "url('/assets/images/paycashforcar.jpg')",
            }}
          >
            <div className="container">
              <h1 className="h1 hero-title">
                We Buy Your Used Vehicle for Cash in Ontario
              </h1>

              <h3 className="h3 hero-title" style={{ color: "#00ff2f" }}>
                Get up to $10,000 cash for your Vehicle today
              </h3>

              <p className="hero-text">
                Have a old or used vehicle for sale? We buy vehicles as is for
                cash. Let us buy your salvage vehicle for a fair and honest
                price. Get instant cash for your used Vehicle in Ontario, Canada
                with Kc Auto Recycling inc. We offer hassle-free transactions
                and top dollar for your vehicle. Contact us today!
              </p>

              <a href="https://wa.me/16475333813" className="btn has-before">
                <span className="span">Inquire About Our Services</span>

                <WhatsappOutline />
              </a>
            </div>
          </section>

          <section
            className="section service"
            id="services"
            aria-label="services"
          >
            <div className="container">
              <h2 className="h2 section-title text-center">
                Service We Provide
              </h2>

              <p className="section-text text-center">
                Sell your damaged or older vehicle for the best price. We buy
                vehicles with major and minor damage, no matter the age and kms.
                We buy all makes and models with free pick up and instant cash
                same day.
              </p>

              <ul className="grid-list">
                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <i className="flaticon-salon"></i>
                    </div>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Call Us
                      </a>
                    </h3>

                    <p className="card-text">Call or text us anytime.</p>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <i className="flaticon-treatment"></i>
                    </div>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Accept & Schedule a pick up
                      </a>
                    </h3>

                    <p className="card-text">Drop it off to us.</p>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <i className="flaticon-shaving-razor"></i>
                    </div>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Free collection
                      </a>
                    </h3>

                    <p className="card-text">
                      Meet your towing agent on pickup day for a quick tow
                    </p>
                  </div>
                </li>

                <li>
                  <div className="service-card">
                    <div className="card-icon">
                      <i className="flaticon-hair-dye"></i>
                    </div>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        Fast Payment
                      </a>
                    </h3>

                    <p className="card-text">
                      Then receive instant cash for your vehicle in person and
                      you&apos;re done!.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
      <footer
        className="footer has-bg-image"
        style={{ backgroundImage: "url('/assets/images/footer-bg.png')" }}
      >
        <div className="container">
          <div className="footer-bottom">
            <p className="copyright">
              &copy; 2024{" "}
              <a href="#" className="copyright-link">
                Kc Auto Recycling inc.
              </a>{" "}
              All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
