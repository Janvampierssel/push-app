export default function PushAppLogo({
  variant = "default",
  className,
}: {
  variant?: "default" | "white" | "black";
  className?: string;
}) {
  const DefaultLogo = (
    <svg
      width="165"
      height="42"
      viewBox="0 0 165 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8318 0.977051H13.9729C15.5256 0.977051 16.9225 1.5785 17.8549 2.65413C18.3277 3.19948 18.6613 3.84417 18.8439 4.54645H18.9699C20.5226 4.54645 21.9195 5.14789 22.8519 6.22353C23.7848 7.2997 24.1759 8.76274 23.9338 10.2917L22.9932 16.2303C24.0557 15.5982 25.2491 15.2546 26.4225 15.2546H28.6369L26.5962 28.1387C26.0542 31.561 24.141 34.8398 21.2826 37.2547C18.4249 39.6692 14.8566 41.0227 11.3629 41.0227H0.384651L0.791228 38.4557H11.7695C14.5843 38.4557 17.4534 37.3649 19.7456 35.4282C22.0372 33.4922 23.5647 30.8697 23.9972 28.1387L25.6278 17.8436C24.8833 17.9276 24.1491 18.2488 23.5462 18.7582C22.8392 19.3555 22.3705 20.1622 22.2378 20.9999L21.1071 28.1387H18.5081L21.3348 10.2917C21.4674 9.45401 21.2542 8.64733 20.7364 8.05002C20.2802 7.52367 19.6201 7.19819 18.8725 7.12787L16.6754 20.9999H14.0764L16.3378 6.72231C16.4704 5.88461 16.2572 5.07793 15.7394 4.48063C15.3126 3.98827 14.7075 3.67167 14.0193 3.57528L11.2595 20.9999H8.66045L10.3565 10.2917C10.4222 9.87658 10.4036 9.46514 10.3012 9.08072C10.1988 8.69627 10.0146 8.34589 9.75812 8.05002C9.50162 7.75412 9.1779 7.51856 8.8049 7.35756C8.54306 7.24454 8.26077 7.16992 7.96623 7.13548L4.63966 28.1387H2.04063L5.77727 4.54645H7.99164C8.76076 4.54645 9.49932 4.69419 10.1652 4.98162C10.5044 5.12801 10.8214 5.30922 11.1119 5.52219L11.8318 0.977051Z"
        fill="#E87B35"
      />
      <path
        d="M147.616 36.1599L151.034 15.771H155.706L155.291 18.3099H155.436C155.693 17.8594 156.034 17.425 156.459 17.0066C156.89 16.5883 157.408 16.2472 158.013 15.9833C158.618 15.713 159.31 15.5779 160.089 15.5779C161.119 15.5779 162.036 15.8482 162.84 16.3888C163.645 16.9294 164.231 17.7629 164.597 18.8891C164.964 20.0154 165.003 21.4506 164.713 23.1948C164.436 24.8745 163.934 26.2808 163.207 27.4135C162.486 28.5462 161.63 29.3957 160.639 29.9621C159.648 30.5285 158.609 30.8116 157.521 30.8116C156.775 30.8116 156.144 30.6893 155.629 30.4448C155.121 30.2002 154.718 29.8784 154.422 29.4794C154.126 29.0804 153.92 28.6524 153.804 28.1954H153.669L152.356 36.1599H147.616ZM154.422 23.1851C154.294 23.9832 154.287 24.6782 154.403 25.2703C154.519 25.8624 154.754 26.3226 155.108 26.6508C155.468 26.9726 155.935 27.1335 156.507 27.1335C157.087 27.1335 157.602 26.9726 158.052 26.6508C158.509 26.3226 158.892 25.8624 159.201 25.2703C159.51 24.6782 159.735 23.9832 159.877 23.1851C159.999 22.3871 160.002 21.6952 159.886 21.1095C159.777 20.5239 159.548 20.0701 159.201 19.7483C158.853 19.4265 158.387 19.2656 157.801 19.2656C157.228 19.2656 156.707 19.4233 156.237 19.7387C155.774 20.054 155.388 20.5046 155.079 21.0902C154.77 21.6759 154.551 22.3742 154.422 23.1851Z"
        fill="#1B1918"
      />
      <path
        d="M130.5 36.1599L133.918 15.771H138.59L138.175 18.3099H138.32C138.577 17.8594 138.919 17.425 139.343 17.0066C139.774 16.5883 140.293 16.2472 140.898 15.9833C141.503 15.713 142.194 15.5779 142.973 15.5779C144.003 15.5779 144.92 15.8482 145.724 16.3888C146.529 16.9294 147.115 17.7629 147.481 18.8891C147.848 20.0154 147.887 21.4506 147.597 23.1948C147.321 24.8745 146.819 26.2808 146.091 27.4135C145.37 28.5462 144.515 29.3957 143.523 29.9621C142.532 30.5285 141.493 30.8116 140.405 30.8116C139.659 30.8116 139.028 30.6893 138.513 30.4448C138.005 30.2002 137.602 29.8784 137.306 29.4794C137.01 29.0804 136.804 28.6524 136.688 28.1954H136.553L135.24 36.1599H130.5ZM137.306 23.1851C137.178 23.9832 137.171 24.6782 137.287 25.2703C137.403 25.8624 137.638 26.3226 137.992 26.6508C138.352 26.9726 138.819 27.1335 139.392 27.1335C139.971 27.1335 140.486 26.9726 140.936 26.6508C141.393 26.3226 141.776 25.8624 142.085 25.2703C142.394 24.6782 142.619 23.9832 142.761 23.1851C142.883 22.3871 142.886 21.6952 142.77 21.1095C142.661 20.5239 142.433 20.0701 142.085 19.7483C141.737 19.4265 141.271 19.2656 140.685 19.2656C140.112 19.2656 139.591 19.4233 139.121 19.7387C138.658 20.054 138.272 20.5046 137.963 21.0902C137.654 21.6759 137.435 22.3742 137.306 23.1851Z"
        fill="#1B1918"
      />
      <path
        d="M115.028 30.5992H109.892L119.845 10.8281H126.207L129.596 30.5992H124.46L122.288 15.8095H122.133L115.028 30.5992ZM115.646 22.8182H126.381L125.763 26.448H115.028L115.646 22.8182Z"
        fill="#1B1918"
      />
      <path
        d="M94.4398 22.1424L93.0303 30.5992H88.3096L91.5919 10.8281H96.1582L94.9032 18.4933H95.0673C95.5436 17.5794 96.2065 16.865 97.056 16.3501C97.9055 15.8352 98.8902 15.5778 100.01 15.5778C101.04 15.5778 101.902 15.8095 102.597 16.2729C103.292 16.7298 103.785 17.3766 104.074 18.2133C104.364 19.05 104.415 20.0282 104.229 21.1481L102.646 30.5992H97.9248L99.3536 22.0748C99.4823 21.251 99.3761 20.6075 99.035 20.1441C98.6939 19.6807 98.1469 19.449 97.3939 19.449C96.8983 19.449 96.4414 19.5584 96.023 19.7772C95.6111 19.9896 95.2668 20.2953 94.9901 20.6943C94.7133 21.0934 94.5299 21.5761 94.4398 22.1424Z"
        fill="#1B1918"
      />
      <path
        d="M87.5956 20.2986L83.3383 20.4145C83.3447 20.0991 83.2739 19.8223 83.1259 19.5842C82.9778 19.3397 82.7687 19.1498 82.4984 19.0146C82.2281 18.8795 81.9063 18.8119 81.533 18.8119C80.928 18.8119 80.3842 18.9471 79.9015 19.2174C79.4252 19.4877 79.1581 19.8384 79.1002 20.2696C79.0552 20.5013 79.1195 20.7041 79.2933 20.8778C79.4671 21.0452 79.8532 21.1932 80.4518 21.3219L83.2321 21.8625C84.6608 22.1457 85.697 22.6381 86.3406 23.3396C86.9906 24.0346 87.2223 24.955 87.0357 26.1006C86.8683 27.0788 86.4371 27.9251 85.7421 28.6395C85.0534 29.3539 84.1749 29.9074 83.1066 30.3C82.0446 30.6861 80.8701 30.8792 79.5829 30.8792C77.4076 30.8792 75.7664 30.4416 74.6595 29.5663C73.5589 28.6846 73.0441 27.5165 73.1148 26.0619L77.7101 25.9461C77.7294 26.4932 77.9128 26.905 78.2603 27.1818C78.6143 27.4521 79.0938 27.5937 79.6988 27.6066C80.3617 27.6194 80.9345 27.4811 81.4171 27.1914C81.8998 26.9018 82.1701 26.5446 82.2281 26.1199C82.2667 25.8431 82.1734 25.6275 81.9481 25.4731C81.7293 25.3186 81.3206 25.1802 80.7221 25.0579L78.2121 24.5656C76.7704 24.2889 75.7278 23.7676 75.0842 23.0017C74.4471 22.2294 74.2283 21.2447 74.4278 20.0476C74.5951 19.0951 74.9877 18.2874 75.6055 17.6245C76.2298 16.9552 77.044 16.4467 78.048 16.0992C79.0584 15.7516 80.2104 15.5779 81.504 15.5779C83.5764 15.5779 85.1403 15.9994 86.1958 16.8425C87.2577 17.6792 87.7243 18.8312 87.5956 20.2986Z"
        fill="#1B1918"
      />
      <path
        d="M66.6423 24.1988L68.0518 15.771H72.7628L70.2915 30.5993H65.7928L66.2465 27.8383H66.092C65.6351 28.7458 64.9626 29.4666 64.0744 30.0007C63.1862 30.5285 62.1855 30.7924 61.0721 30.7924C60.0616 30.7924 59.2121 30.5607 58.5234 30.0973C57.8348 29.6339 57.3457 28.9871 57.0561 28.1569C56.7729 27.3202 56.7214 26.3419 56.9016 25.2221L58.4848 15.771H63.2056L61.7864 24.2953C61.6642 25.0998 61.7703 25.7338 62.105 26.1971C62.4461 26.6605 62.9803 26.8922 63.7076 26.8922C64.1774 26.8922 64.6182 26.7892 65.0301 26.5833C65.442 26.3709 65.7896 26.0652 66.0727 25.6662C66.3624 25.2607 66.5522 24.7716 66.6423 24.1988Z"
        fill="#1B1918"
      />
      <path
        d="M38.6322 30.5992L41.9145 10.8281H50.0816C51.5619 10.8281 52.7944 11.1145 53.7791 11.6873C54.7638 12.2601 55.4621 13.0614 55.874 14.0911C56.2858 15.1209 56.3792 16.3147 56.1539 17.6727C55.9351 19.0435 55.4427 20.2374 54.6769 21.2543C53.9174 22.2711 52.9392 23.0595 51.7421 23.6195C50.545 24.1794 49.1838 24.4593 47.6585 24.4593H42.6289L43.2564 20.6943H47.4075C48.1348 20.6943 48.7623 20.5688 49.29 20.3178C49.8242 20.0668 50.2522 19.7161 50.574 19.2656C50.8958 18.8151 51.1082 18.2841 51.2111 17.6727C51.3077 17.0613 51.2691 16.5335 51.0953 16.0895C50.9215 15.639 50.6094 15.2914 50.1589 15.0469C49.7148 14.8023 49.1356 14.68 48.4212 14.68H46.0657L43.4109 30.5992H38.6322Z"
        fill="#1B1918"
      />
    </svg>
  );

  const WhiteLogo = (
    <svg
      width="165"
      height="41"
      viewBox="0 0 165 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8318 0H13.9729C15.5256 0 16.9226 0.601448 17.855 1.67708C18.3277 2.22243 18.6613 2.86712 18.8439 3.56939H18.9699C20.5226 3.56939 21.9196 4.17084 22.852 5.24648C23.7848 6.32265 24.176 7.78569 23.9338 9.31465L22.9932 15.2533C24.0557 14.6211 25.2491 14.2776 26.4225 14.2776H28.6369L26.5963 27.1616C26.0542 30.5839 24.141 33.8627 21.2826 36.2777C18.4249 38.6921 14.8567 40.0457 11.363 40.0457H0.384658L0.791236 37.4786H11.7695C14.5844 37.4786 17.4534 36.3878 19.7456 34.4512C22.0372 32.5151 23.5647 29.8926 23.9972 27.1616L25.6278 16.8666C24.8833 16.9505 24.1491 17.2718 23.5462 17.7812C22.8392 18.3785 22.3705 19.1851 22.2378 20.0228L21.1071 27.1616H18.5081L21.3348 9.31465C21.4674 8.47696 21.2542 7.67028 20.7364 7.07297C20.2802 6.54662 19.6202 6.22114 18.8726 6.15082L16.6754 20.0228H14.0764L16.3378 5.74526C16.4704 4.90756 16.2572 4.10088 15.7394 3.50358C15.3126 3.01122 14.7076 2.69462 14.0193 2.59823L11.2595 20.0228H8.66046L10.3565 9.31465C10.4222 8.89953 10.4036 8.48808 10.3012 8.10367C10.1988 7.71922 10.0146 7.36884 9.75812 7.07297C9.50162 6.77707 9.1779 6.54151 8.80491 6.38051C8.54307 6.26748 8.26078 6.19287 7.96624 6.15843L4.63966 27.1616H2.04063L5.77728 3.56939H7.99165C8.76076 3.56939 9.49932 3.71714 10.1652 4.00457C10.5044 4.15096 10.8214 4.33217 11.1119 4.54514L11.8318 0Z"
        fill="white"
      />
      <path
        d="M147.616 35.1828L151.034 14.7939H155.706L155.291 17.3329H155.436C155.693 16.8824 156.034 16.4479 156.459 16.0296C156.89 15.6113 157.408 15.2702 158.013 15.0063C158.618 14.736 159.31 14.6008 160.089 14.6008C161.119 14.6008 162.036 14.8711 162.84 15.4118C163.645 15.9524 164.231 16.7858 164.597 17.9121C164.964 19.0384 165.003 20.4736 164.713 22.2177C164.436 23.8975 163.934 25.3037 163.207 26.4364C162.486 27.5691 161.63 28.4187 160.639 28.985C159.648 29.5514 158.609 29.8346 157.521 29.8346C156.775 29.8346 156.144 29.7123 155.629 29.4677C155.121 29.2232 154.718 28.9014 154.422 28.5024C154.126 28.1033 153.92 27.6753 153.804 27.2184H153.669L152.356 35.1828H147.616ZM154.422 22.2081C154.294 23.0061 154.287 23.7012 154.403 24.2933C154.519 24.8854 154.754 25.3455 155.108 25.6738C155.468 25.9956 155.935 26.1565 156.507 26.1565C157.087 26.1565 157.602 25.9956 158.052 25.6738C158.509 25.3455 158.892 24.8854 159.201 24.2933C159.51 23.7012 159.735 23.0061 159.877 22.2081C159.999 21.41 160.002 20.7181 159.886 20.1325C159.777 19.5468 159.548 19.0931 159.201 18.7713C158.853 18.4495 158.387 18.2886 157.801 18.2886C157.228 18.2886 156.707 18.4463 156.237 18.7616C155.774 19.077 155.388 19.5275 155.079 20.1132C154.77 20.6988 154.551 21.3971 154.422 22.2081Z"
        fill="white"
      />
      <path
        d="M130.5 35.1828L133.918 14.7939H138.59L138.175 17.3329H138.32C138.577 16.8824 138.918 16.4479 139.343 16.0296C139.774 15.6113 140.293 15.2702 140.898 15.0063C141.503 14.736 142.194 14.6008 142.973 14.6008C144.003 14.6008 144.92 14.8711 145.724 15.4118C146.529 15.9524 147.115 16.7858 147.481 17.9121C147.848 19.0384 147.887 20.4736 147.597 22.2177C147.321 23.8975 146.819 25.3037 146.091 26.4364C145.37 27.5691 144.515 28.4187 143.523 28.985C142.532 29.5514 141.493 29.8346 140.405 29.8346C139.659 29.8346 139.028 29.7123 138.513 29.4677C138.005 29.2232 137.602 28.9014 137.306 28.5024C137.01 28.1033 136.804 27.6753 136.688 27.2184H136.553L135.24 35.1828H130.5ZM137.306 22.2081C137.178 23.0061 137.171 23.7012 137.287 24.2933C137.403 24.8854 137.638 25.3455 137.992 25.6738C138.352 25.9956 138.819 26.1565 139.392 26.1565C139.971 26.1565 140.486 25.9956 140.936 25.6738C141.393 25.3455 141.776 24.8854 142.085 24.2933C142.394 23.7012 142.619 23.0061 142.761 22.2081C142.883 21.41 142.886 20.7181 142.77 20.1325C142.661 19.5468 142.432 19.0931 142.085 18.7713C141.737 18.4495 141.271 18.2886 140.685 18.2886C140.112 18.2886 139.591 18.4463 139.121 18.7616C138.658 19.077 138.272 19.5275 137.963 20.1132C137.654 20.6988 137.435 21.3971 137.306 22.2081Z"
        fill="white"
      />
      <path
        d="M115.028 29.6221H109.892L119.845 9.85107H126.207L129.596 29.6221H124.46L122.288 14.8325H122.133L115.028 29.6221ZM115.646 21.8411H126.381L125.763 25.471H115.028L115.646 21.8411Z"
        fill="white"
      />
      <path
        d="M94.4398 21.1654L93.0303 29.6221H88.3096L91.5919 9.85107H96.1582L94.9032 17.5162H95.0673C95.5436 16.6023 96.2064 15.8879 97.056 15.3731C97.9055 14.8582 98.8902 14.6008 100.01 14.6008C101.04 14.6008 101.902 14.8325 102.597 15.2958C103.292 15.7528 103.785 16.3996 104.074 17.2363C104.364 18.0729 104.415 19.0512 104.229 20.171L102.646 29.6221H97.9248L99.3536 21.0978C99.4823 20.274 99.3761 19.6304 99.035 19.167C98.6939 18.7036 98.1469 18.4719 97.3939 18.4719C96.8983 18.4719 96.4414 18.5814 96.023 18.8002C95.6111 19.0126 95.2668 19.3183 94.9901 19.7173C94.7133 20.1163 94.5299 20.599 94.4398 21.1654Z"
        fill="white"
      />
      <path
        d="M87.5956 19.3216L83.3383 19.4374C83.3447 19.122 83.2739 18.8453 83.1259 18.6072C82.9779 18.3626 82.7687 18.1727 82.4984 18.0376C82.2281 17.9024 81.9063 17.8349 81.533 17.8349C80.928 17.8349 80.3842 17.97 79.9015 18.2403C79.4252 18.5106 79.1582 18.8614 79.1002 19.2926C79.0552 19.5243 79.1195 19.727 79.2933 19.9008C79.4671 20.0681 79.8532 20.2161 80.4518 20.3449L83.2321 20.8855C84.6608 21.1687 85.697 21.661 86.3406 22.3625C86.9906 23.0576 87.2223 23.9779 87.0357 25.1235C86.8684 26.1018 86.4371 26.9481 85.7421 27.6625C85.0534 28.3769 84.1749 28.9303 83.1066 29.3229C82.0447 29.7091 80.8701 29.9022 79.5829 29.9022C77.4076 29.9022 75.7664 29.4645 74.6595 28.5892C73.5589 27.7075 73.0441 26.5394 73.1149 25.0849L77.7101 24.969C77.7294 25.5161 77.9128 25.928 78.2604 26.2047C78.6143 26.475 79.0938 26.6166 79.6988 26.6295C80.3617 26.6424 80.9345 26.504 81.4172 26.2144C81.8998 25.9248 82.1701 25.5676 82.2281 25.1428C82.2667 24.8661 82.1734 24.6505 81.9481 24.496C81.7293 24.3416 81.3206 24.2032 80.7221 24.0809L78.2121 23.5885C76.7704 23.3118 75.7278 22.7905 75.0842 22.0246C74.4471 21.2523 74.2283 20.2676 74.4278 19.0706C74.5951 18.118 74.9877 17.3103 75.6055 16.6474C76.2298 15.9781 77.044 15.4697 78.048 15.1221C79.0584 14.7746 80.2104 14.6008 81.504 14.6008C83.5764 14.6008 85.1403 15.0224 86.1958 15.8655C87.2577 16.7021 87.7243 17.8542 87.5956 19.3216Z"
        fill="white"
      />
      <path
        d="M66.6423 23.2217L68.0518 14.7939H72.7628L70.2915 29.6222H65.7928L66.2465 26.8612H66.092C65.6351 27.7687 64.9625 28.4895 64.0744 29.0237C63.1862 29.5514 62.1855 29.8153 61.072 29.8153C60.0616 29.8153 59.2121 29.5836 58.5234 29.1202C57.8348 28.6569 57.3457 28.01 57.0561 27.1798C56.7729 26.3432 56.7214 25.3649 56.9016 24.245L58.4848 14.7939H63.2055L61.7864 23.3183C61.6641 24.1228 61.7703 24.7567 62.105 25.2201C62.4461 25.6835 62.9803 25.9152 63.7075 25.9152C64.1774 25.9152 64.6182 25.8122 65.0301 25.6062C65.442 25.3939 65.7896 25.0882 66.0727 24.6891C66.3623 24.2837 66.5522 23.7945 66.6423 23.2217Z"
        fill="white"
      />
      <path
        d="M38.6322 29.6221L41.9145 9.85107H50.0816C51.5619 9.85107 52.7944 10.1375 53.7791 10.7103C54.7638 11.2831 55.4621 12.0843 55.874 13.1141C56.2858 14.1438 56.3792 15.3377 56.1539 16.6956C55.9351 18.0665 55.4427 19.2603 54.6769 20.2772C53.9174 21.2941 52.9392 22.0825 51.7421 22.6424C50.545 23.2023 49.1838 23.4823 47.6585 23.4823H42.6289L43.2564 19.7173H47.4075C48.1348 19.7173 48.7623 19.5918 49.29 19.3408C49.8242 19.0898 50.2522 18.739 50.574 18.2885C50.8958 17.838 51.1082 17.3071 51.2111 16.6956C51.3077 16.0842 51.2691 15.5565 51.0953 15.1124C50.9215 14.6619 50.6094 14.3144 50.1589 14.0698C49.7148 13.8252 49.1356 13.703 48.4212 13.703H46.0657L43.4109 29.6221H38.6322Z"
        fill="white"
      />
    </svg>
  );

  const BlackLogo = (
    <svg
      width="165"
      height="41"
      viewBox="0 0 165 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8318 0H13.9729C15.5256 0 16.9226 0.601448 17.855 1.67708C18.3277 2.22243 18.6613 2.86712 18.8439 3.56939H18.9699C20.5226 3.56939 21.9196 4.17084 22.852 5.24648C23.7848 6.32265 24.176 7.78569 23.9338 9.31465L22.9932 15.2533C24.0557 14.6211 25.2491 14.2776 26.4225 14.2776H28.6369L26.5963 27.1616C26.0542 30.5839 24.141 33.8627 21.2826 36.2777C18.4249 38.6921 14.8567 40.0457 11.363 40.0457H0.384658L0.791236 37.4786H11.7695C14.5844 37.4786 17.4534 36.3878 19.7456 34.4512C22.0372 32.5151 23.5647 29.8926 23.9972 27.1616L25.6278 16.8666C24.8833 16.9505 24.1491 17.2718 23.5462 17.7812C22.8392 18.3785 22.3705 19.1851 22.2378 20.0228L21.1071 27.1616H18.5081L21.3348 9.31465C21.4674 8.47696 21.2542 7.67028 20.7364 7.07297C20.2802 6.54662 19.6202 6.22114 18.8726 6.15082L16.6754 20.0228H14.0764L16.3378 5.74526C16.4704 4.90756 16.2572 4.10088 15.7394 3.50358C15.3126 3.01122 14.7076 2.69462 14.0193 2.59823L11.2595 20.0228H8.66046L10.3565 9.31465C10.4222 8.89953 10.4036 8.48808 10.3012 8.10367C10.1988 7.71922 10.0146 7.36884 9.75812 7.07297C9.50162 6.77707 9.1779 6.54151 8.80491 6.38051C8.54307 6.26748 8.26078 6.19287 7.96624 6.15843L4.63966 27.1616H2.04063L5.77728 3.56939H7.99165C8.76076 3.56939 9.49932 3.71714 10.1652 4.00457C10.5044 4.15096 10.8214 4.33217 11.1119 4.54514L11.8318 0Z"
        fill="#1B1918"
      />
      <path
        d="M147.616 35.1828L151.034 14.7939H155.706L155.291 17.3329H155.436C155.693 16.8824 156.034 16.4479 156.459 16.0296C156.89 15.6113 157.408 15.2702 158.013 15.0063C158.618 14.736 159.31 14.6008 160.089 14.6008C161.119 14.6008 162.036 14.8711 162.84 15.4118C163.645 15.9524 164.231 16.7858 164.597 17.9121C164.964 19.0384 165.003 20.4736 164.713 22.2177C164.436 23.8975 163.934 25.3037 163.207 26.4364C162.486 27.5691 161.63 28.4187 160.639 28.985C159.648 29.5514 158.609 29.8346 157.521 29.8346C156.775 29.8346 156.144 29.7123 155.629 29.4677C155.121 29.2232 154.718 28.9014 154.422 28.5024C154.126 28.1033 153.92 27.6753 153.804 27.2184H153.669L152.356 35.1828H147.616ZM154.422 22.2081C154.294 23.0061 154.287 23.7012 154.403 24.2933C154.519 24.8854 154.754 25.3455 155.108 25.6738C155.468 25.9956 155.935 26.1565 156.507 26.1565C157.087 26.1565 157.602 25.9956 158.052 25.6738C158.509 25.3455 158.892 24.8854 159.201 24.2933C159.51 23.7012 159.735 23.0061 159.877 22.2081C159.999 21.41 160.002 20.7181 159.886 20.1325C159.777 19.5468 159.548 19.0931 159.201 18.7713C158.853 18.4495 158.387 18.2886 157.801 18.2886C157.228 18.2886 156.707 18.4463 156.237 18.7616C155.774 19.077 155.388 19.5275 155.079 20.1132C154.77 20.6988 154.551 21.3971 154.422 22.2081Z"
        fill="#1B1918"
      />
      <path
        d="M130.5 35.1828L133.918 14.7939H138.59L138.175 17.3329H138.32C138.577 16.8824 138.918 16.4479 139.343 16.0296C139.774 15.6113 140.293 15.2702 140.898 15.0063C141.503 14.736 142.194 14.6008 142.973 14.6008C144.003 14.6008 144.92 14.8711 145.724 15.4118C146.529 15.9524 147.115 16.7858 147.481 17.9121C147.848 19.0384 147.887 20.4736 147.597 22.2177C147.321 23.8975 146.819 25.3037 146.091 26.4364C145.37 27.5691 144.515 28.4187 143.523 28.985C142.532 29.5514 141.493 29.8346 140.405 29.8346C139.659 29.8346 139.028 29.7123 138.513 29.4677C138.005 29.2232 137.602 28.9014 137.306 28.5024C137.01 28.1033 136.804 27.6753 136.688 27.2184H136.553L135.24 35.1828H130.5ZM137.306 22.2081C137.178 23.0061 137.171 23.7012 137.287 24.2933C137.403 24.8854 137.638 25.3455 137.992 25.6738C138.352 25.9956 138.819 26.1565 139.392 26.1565C139.971 26.1565 140.486 25.9956 140.936 25.6738C141.393 25.3455 141.776 24.8854 142.085 24.2933C142.394 23.7012 142.619 23.0061 142.761 22.2081C142.883 21.41 142.886 20.7181 142.77 20.1325C142.661 19.5468 142.432 19.0931 142.085 18.7713C141.737 18.4495 141.271 18.2886 140.685 18.2886C140.112 18.2886 139.591 18.4463 139.121 18.7616C138.658 19.077 138.272 19.5275 137.963 20.1132C137.654 20.6988 137.435 21.3971 137.306 22.2081Z"
        fill="#1B1918"
      />
      <path
        d="M115.028 29.6221H109.892L119.845 9.85107H126.207L129.596 29.6221H124.46L122.288 14.8325H122.133L115.028 29.6221ZM115.646 21.8411H126.381L125.763 25.471H115.028L115.646 21.8411Z"
        fill="#1B1918"
      />
      <path
        d="M94.4398 21.1654L93.0303 29.6221H88.3096L91.5919 9.85107H96.1582L94.9032 17.5162H95.0673C95.5436 16.6023 96.2064 15.8879 97.056 15.3731C97.9055 14.8582 98.8902 14.6008 100.01 14.6008C101.04 14.6008 101.902 14.8325 102.597 15.2958C103.292 15.7528 103.785 16.3996 104.074 17.2363C104.364 18.0729 104.415 19.0512 104.229 20.171L102.646 29.6221H97.9248L99.3536 21.0978C99.4823 20.274 99.3761 19.6304 99.035 19.167C98.6939 18.7036 98.1469 18.4719 97.3939 18.4719C96.8983 18.4719 96.4414 18.5814 96.023 18.8002C95.6111 19.0126 95.2668 19.3183 94.9901 19.7173C94.7133 20.1163 94.5299 20.599 94.4398 21.1654Z"
        fill="#1B1918"
      />
      <path
        d="M87.5956 19.3216L83.3383 19.4374C83.3447 19.122 83.2739 18.8453 83.1259 18.6072C82.9779 18.3626 82.7687 18.1727 82.4984 18.0376C82.2281 17.9024 81.9063 17.8349 81.533 17.8349C80.928 17.8349 80.3842 17.97 79.9015 18.2403C79.4252 18.5106 79.1582 18.8614 79.1002 19.2926C79.0552 19.5243 79.1195 19.727 79.2933 19.9008C79.4671 20.0681 79.8532 20.2161 80.4518 20.3449L83.2321 20.8855C84.6608 21.1687 85.697 21.661 86.3406 22.3625C86.9906 23.0576 87.2223 23.9779 87.0357 25.1235C86.8684 26.1018 86.4371 26.9481 85.7421 27.6625C85.0534 28.3769 84.1749 28.9303 83.1066 29.3229C82.0447 29.7091 80.8701 29.9022 79.5829 29.9022C77.4076 29.9022 75.7664 29.4645 74.6595 28.5892C73.5589 27.7075 73.0441 26.5394 73.1149 25.0849L77.7101 24.969C77.7294 25.5161 77.9128 25.928 78.2604 26.2047C78.6143 26.475 79.0938 26.6166 79.6988 26.6295C80.3617 26.6424 80.9345 26.504 81.4172 26.2144C81.8998 25.9248 82.1701 25.5676 82.2281 25.1428C82.2667 24.8661 82.1734 24.6505 81.9481 24.496C81.7293 24.3416 81.3206 24.2032 80.7221 24.0809L78.2121 23.5885C76.7704 23.3118 75.7278 22.7905 75.0842 22.0246C74.4471 21.2523 74.2283 20.2676 74.4278 19.0706C74.5951 18.118 74.9877 17.3103 75.6055 16.6474C76.2298 15.9781 77.044 15.4697 78.048 15.1221C79.0584 14.7746 80.2104 14.6008 81.504 14.6008C83.5764 14.6008 85.1403 15.0224 86.1958 15.8655C87.2577 16.7021 87.7243 17.8542 87.5956 19.3216Z"
        fill="#1B1918"
      />
      <path
        d="M66.6423 23.2217L68.0518 14.7939H72.7628L70.2915 29.6222H65.7928L66.2465 26.8612H66.092C65.6351 27.7687 64.9625 28.4895 64.0744 29.0237C63.1862 29.5514 62.1855 29.8153 61.072 29.8153C60.0616 29.8153 59.2121 29.5836 58.5234 29.1202C57.8348 28.6569 57.3457 28.01 57.0561 27.1798C56.7729 26.3432 56.7214 25.3649 56.9016 24.245L58.4848 14.7939H63.2055L61.7864 23.3183C61.6641 24.1228 61.7703 24.7567 62.105 25.2201C62.4461 25.6835 62.9803 25.9152 63.7075 25.9152C64.1774 25.9152 64.6182 25.8122 65.0301 25.6062C65.442 25.3939 65.7896 25.0882 66.0727 24.6891C66.3623 24.2837 66.5522 23.7945 66.6423 23.2217Z"
        fill="#1B1918"
      />
      <path
        d="M38.6322 29.6221L41.9145 9.85107H50.0816C51.5619 9.85107 52.7944 10.1375 53.7791 10.7103C54.7638 11.2831 55.4621 12.0843 55.874 13.1141C56.2858 14.1438 56.3792 15.3377 56.1539 16.6956C55.9351 18.0665 55.4427 19.2603 54.6769 20.2772C53.9174 21.2941 52.9392 22.0825 51.7421 22.6424C50.545 23.2023 49.1838 23.4823 47.6585 23.4823H42.6289L43.2564 19.7173H47.4075C48.1348 19.7173 48.7623 19.5918 49.29 19.3408C49.8242 19.0898 50.2522 18.739 50.574 18.2885C50.8958 17.838 51.1082 17.3071 51.2111 16.6956C51.3077 16.0842 51.2691 15.5565 51.0953 15.1124C50.9215 14.6619 50.6094 14.3144 50.1589 14.0698C49.7148 13.8252 49.1356 13.703 48.4212 13.703H46.0657L43.4109 29.6221H38.6322Z"
        fill="#1B1918"
      />
    </svg>
  );

  switch (variant) {
    case "default":
      return DefaultLogo;
    case "white":
      return WhiteLogo;
    case "black":
      return BlackLogo;
  }
}
