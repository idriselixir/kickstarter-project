import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-screen pt-[100px] flex justify-between flex-col bg-Footer bg-no-repeat bg-right-bottom bg-[length:300px_400px]">
      <div className=" border-t-2 flex justify-center items-center w-auto   border-b-2 border-b-slate-300 gap-10  border-slate-400 pt-10 pb-10">
        <Link href="./arts">Arts</Link>
        <Link href="./arts">Comics & Illustration</Link>
        <Link href="./arts">Design & Tech</Link>
        <Link href="./arts">Food & Craft</Link>
        <Link href="./arts">Games</Link>
        <Link href="./arts">Music</Link>
        <Link href="./arts">Publishing</Link>
      </div>
      <div className="flex justify-around gap-7 items-center pt-10 font-normal ">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-medium text-black">ABOUT</h1>
          </div>
          <div className="flex flex-col text-[15px] font-[400]">
            <Link
              href="./aboutus"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              {" "}
              About us
            </Link>
            <Link
              href="./ourcharters"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Our charts
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Stats
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Press
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Jobs{" "}
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 ">
          <div>
            <h1 className="font-[500] text-black">SUPPORT</h1>
          </div>
          <div className="flex flex-col text-[15px] font-[400] ">
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Help center
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Our rules
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Creator resources
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Forward refund
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Brand assets
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="font-[500] text-black ">MORE FROM KICKSTARTER</h1>
          </div>
          <div className="flex flex-col text-black text-[15px] font-[400] ">
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Newsletters
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Kickstarter Project Updates
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              The Creative Independent
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Mobile apps
            </Link>
            <Link
              href="./arts"
              className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
            >
              Research
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-around items-center">
        <div className=" flex  pl-10 gap-4">
          <Image src="/klogo.png" alt="" width={20} height={20} />
          <span>Kickstarter, PBC © 2024</span>
        </div>
        <div className="flex gap-4">
          <Image
            src="/facebook.png"
            alt=""
            width={20}
            height={20}
            className="hover:bg-green-500 rounded-xl "
          />
          <Image
            src="/instagram.png"
            alt=""
            width={20}
            height={20}
            className="hover:bg-green-500 rounded-xl "
          />
          <Image
            src="/twitter.png"
            alt=""
            width={20}
            height={20}
            className="hover:bg-green-500 rounded-xl "
          />
          <Image
            src="/youtube.png"
            alt=""
            width={20}
            height={20}
            className="hover:bg-green-500 rounded-xl "
          />
        </div>
        <div className="language-picker js-language-picker flex gap-6">
          <form action="" className="language-picker__form flex gap-7 pr-8">
            <select
              name="language-picker-select"
              id="language-picker-select class"
              className="flex  hover:border-2 hover:border-slate-400 shadow h-10 w-auto translate-x-4  bg-slate-50"
            >
              <option lang="de" value="deutsch">
                Deutsch
              </option>
              <option lang="en" value="english" selected>
                English
              </option>
              <option lang="fr" value="francais">
                Français
              </option>
              <option lang="it" value="italiano">
                Italiano
              </option>
            </select>
            <select
              className="flex  hover:border-2 form-select hover:border-slate-400 shadow h-10 w-auto translate-x-4  bg-slate-50"
              id="currency"
              name="currency"
            >
              <option>select currency</option>
              <option value="AFN">Afghan Afghani</option>
              <option value="ALL">Albanian Lek</option>
              <option value="DZD">Algerian Dinar</option>
              <option value="AOA">Angolan Kwanza</option>
              <option value="ARS">Argentine Peso</option>
              <option value="AMD">Armenian Dram</option>
              <option value="AWG">Aruban Florin</option>
              <option value="AUD">Australian Dollar</option>
              <option value="AZN">Azerbaijani Manat</option>
              <option value="BSD">Bahamian Dollar</option>
              <option value="BHD">Bahraini Dinar</option>
              <option value="BDT">Bangladeshi Taka</option>
              <option value="BBD">Barbadian Dollar</option>
              <option value="BYR">Belarusian Ruble</option>
              <option value="BEF">Belgian Franc</option>
              <option value="BZD">Belize Dollar</option>
              <option value="BMD">Bermudan Dollar</option>
              <option value="BTN">Bhutanese Ngultrum</option>
              <option value="BTC">Bitcoin</option>
              <option value="BOB">Bolivian Boliviano</option>
              <option value="BAM">Bosnia-Herzegovina Convertible Mark</option>
              <option value="BWP">Botswanan Pula</option>
              <option value="BRL">Brazilian Real</option>
              <option value="GBP">British Pound Sterling</option>
              <option value="BND">Brunei Dollar</option>
              <option value="BGN">Bulgarian Lev</option>
              <option value="BIF">Burundian Franc</option>
              <option value="KHR">Cambodian Riel</option>
              <option value="CAD">Canadian Dollar</option>
              <option value="CVE">Cape Verdean Escudo</option>
              <option value="KYD">Cayman Islands Dollar</option>
              <option value="XOF">CFA Franc BCEAO</option>
              <option value="XAF">CFA Franc BEAC</option>
              <option value="XPF">CFP Franc</option>
              <option value="CLP">Chilean Peso</option>
              <option value="CNY">Chinese Yuan</option>
              <option value="COP">Colombian Peso</option>
              <option value="KMF">Comorian Franc</option>
              <option value="CDF">Congolese Franc</option>
              <option value="CRC">Costa Rican ColÃ³n</option>
              <option value="HRK">Croatian Kuna</option>
              <option value="CUC">Cuban Convertible Peso</option>
              <option value="CZK">Czech Republic Koruna</option>
              <option value="DKK">Danish Krone</option>
              <option value="DJF">Djiboutian Franc</option>
              <option value="DOP">Dominican Peso</option>
              <option value="XCD">East Caribbean Dollar</option>
              <option value="EGP">Egyptian Pound</option>
              <option value="ERN">Eritrean Nakfa</option>
              <option value="EEK">Estonian Kroon</option>
              <option value="ETB">Ethiopian Birr</option>
              <option value="EUR">Euro</option>
              <option value="FKP">Falkland Islands Pound</option>
              <option value="FJD">Fijian Dollar</option>
              <option value="GMD">Gambian Dalasi</option>
              <option value="GEL">Georgian Lari</option>
              <option value="DEM">German Mark</option>
              <option value="GHS">Ghanaian Cedi</option>
              <option value="GIP">Gibraltar Pound</option>
              <option value="GRD">Greek Drachma</option>
              <option value="GTQ">Guatemalan Quetzal</option>
              <option value="GNF">Guinean Franc</option>
              <option value="GYD">Guyanaese Dollar</option>
              <option value="HTG">Haitian Gourde</option>
              <option value="HNL">Honduran Lempira</option>
              <option value="HKD">Hong Kong Dollar</option>
              <option value="HUF">Hungarian Forint</option>
              <option value="ISK">Icelandic KrÃ³na</option>
              <option value="INR">Indian Rupee</option>
              <option value="IDR">Indonesian Rupiah</option>
              <option value="IRR">Iranian Rial</option>
              <option value="IQD">Iraqi Dinar</option>
              <option value="ILS">Israeli New Sheqel</option>
              <option value="ITL">Italian Lira</option>
              <option value="JMD">Jamaican Dollar</option>
              <option value="JPY">Japanese Yen</option>
              <option value="JOD">Jordanian Dinar</option>
              <option value="KZT">Kazakhstani Tenge</option>
              <option value="KES">Kenyan Shilling</option>
              <option value="KWD">Kuwaiti Dinar</option>
              <option value="KGS">Kyrgystani Som</option>
              <option value="LAK">Laotian Kip</option>
              <option value="LVL">Latvian Lats</option>
              <option value="LBP">Lebanese Pound</option>
              <option value="LSL">Lesotho Loti</option>
              <option value="LRD">Liberian Dollar</option>
              <option value="LYD">Libyan Dinar</option>
              <option value="LTL">Lithuanian Litas</option>
              <option value="MOP">Macanese Pataca</option>
              <option value="MKD">Macedonian Denar</option>
              <option value="MGA">Malagasy Ariary</option>
              <option value="MWK">Malawian Kwacha</option>
              <option value="MYR">Malaysian Ringgit</option>
              <option value="MVR">Maldivian Rufiyaa</option>
              <option value="MRO">Mauritanian Ouguiya</option>
              <option value="MUR">Mauritian Rupee</option>
              <option value="MXN">Mexican Peso</option>
              <option value="MDL">Moldovan Leu</option>
              <option value="MNT">Mongolian Tugrik</option>
              <option value="MAD">Moroccan Dirham</option>
              <option value="MZM">Mozambican Metical</option>
              <option value="MMK">Myanmar Kyat</option>
              <option value="NAD">Namibian Dollar</option>
              <option value="NPR">Nepalese Rupee</option>
              <option value="ANG">Netherlands Antillean Guilder</option>
              <option value="TWD">New Taiwan Dollar</option>
              <option value="NZD">New Zealand Dollar</option>
              <option value="NIO">Nicaraguan CÃ³rdoba</option>
              <option value="NGN">Nigerian Naira</option>
              <option value="KPW">North Korean Won</option>
              <option value="NOK">Norwegian Krone</option>
              <option value="OMR">Omani Rial</option>
              <option value="PKR">Pakistani Rupee</option>
              <option value="PAB">Panamanian Balboa</option>
              <option value="PGK">Papua New Guinean Kina</option>
              <option value="PYG">Paraguayan Guarani</option>
              <option value="PEN">Peruvian Nuevo Sol</option>
              <option value="PHP">Philippine Peso</option>
              <option value="PLN">Polish Zloty</option>
              <option value="QAR">Qatari Rial</option>
              <option value="RON">Romanian Leu</option>
              <option value="RUB">Russian Ruble</option>
              <option value="RWF">Rwandan Franc</option>
              <option value="SVC">Salvadoran ColÃ³n</option>
              <option value="WST">Samoan Tala</option>
              <option value="SAR">Saudi Riyal</option>
              <option value="RSD">Serbian Dinar</option>
              <option value="SCR">Seychellois Rupee</option>
              <option value="SLL">Sierra Leonean Leone</option>
              <option value="SGD">Singapore Dollar</option>
              <option value="SKK">Slovak Koruna</option>
              <option value="SBD">Solomon Islands Dollar</option>
              <option value="SOS">Somali Shilling</option>
              <option value="ZAR">South African Rand</option>
              <option value="KRW">South Korean Won</option>
              <option value="XDR">Special Drawing Rights</option>
              <option value="LKR">Sri Lankan Rupee</option>
              <option value="SHP">St. Helena Pound</option>
              <option value="SDG">Sudanese Pound</option>
              <option value="SRD">Surinamese Dollar</option>
              <option value="SZL">Swazi Lilangeni</option>
              <option value="SEK">Swedish Krona</option>
              <option value="CHF">Swiss Franc</option>
              <option value="SYP">Syrian Pound</option>
              <option value="STD">São Tomé and Príncipe Dobra</option>
              <option value="TJS">Tajikistani Somoni</option>
              <option value="TZS">Tanzanian Shilling</option>
              <option value="THB">Thai Baht</option>
              <option value="TOP">Tongan pa&apos;anga</option>
              <option value="TTD">Trinidad & Tobago Dollar</option>
              <option value="TND">Tunisian Dinar</option>
              <option value="TRY">Turkish Lira</option>
              <option value="TMT">Turkmenistani Manat</option>
              <option value="UGX">Ugandan Shilling</option>
              <option value="UAH">Ukrainian Hryvnia</option>
              <option value="AED">United Arab Emirates Dirham</option>
              <option value="UYU">Uruguayan Peso</option>
              <option value="USD">US Dollar</option>
              <option value="UZS">Uzbekistan Som</option>
              <option value="VUV">Vanuatu Vatu</option>
              <option value="VEF">Venezuelan BolÃ­var</option>
              <option value="VND">Vietnamese Dong</option>
              <option value="YER">Yemeni Rial</option>
              <option value="ZMK">Zambian Kwacha</option>
            </select>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 pb-6 border-t-2 border-slate-300 pt-10">
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Trust & Safety
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Terms of Use
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Do Not Sell My Personal Information
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          Accessibility Statement
        </Link>
        <Link
          href="/"
          className="hover:border-b-2 hover:border-b-green-400 hover:text-green-400"
        >
          CA Notice of Consent
        </Link>
      </div>
    </div>
  );
};

export default Footer;
