export interface SubMenu {
  title: string;
  href: string;
}

export interface ExtraLink {
  label: string;
  href: string;
}

export interface Menu {
  title: string;
  href: string;
  submenu: SubMenu[];
}

export interface Props {
  menu?: Menu[];
  social?: {
    linkedinUrl?: string;
    gitUrl?: string;
    discordUrl?: string;
  };
  extraLinks?: ExtraLink[];
  rounded?: boolean;
}

function SubMenu({ menu }: { menu: Menu[] }) {
  return (
    <div class="flex flex-col md:flex-row gap-4 md:gap-[120px]">
      {menu?.map((menuItem) => {
        return (
          <div class="flex flex-col gap-4 md:gap-5 text-[#113032] opacity-90">
            <a href={menuItem.href} class="font-bold hidden md:block">
              {menuItem.title}
            </a>
            <ul class="flex flex-col gap-4 md:gap-2">
              {menuItem?.submenu?.map((submenuItem) => {
                return (
                  <li>
                    <a href={submenuItem.href} class="inline-block group">
                      <div class="mb-[6px]">{submenuItem.title}</div>
                      <div class="h-[2px] bg-white w-0 group-hover:w-full duration-500"></div>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default function Footer({
  menu,
  social = {
    linkedinUrl: "https://www.linkedin.com/company/deco-cx/",
    gitUrl: "https://github.com/deco-cx",
    discordUrl: "https://discord.gg/YsGgt8EQCZ",
  },
  extraLinks,
  rounded,
}: Props) {
  return (
    <section class="bg-[#02F67C] relative">
      {rounded && (
        <>
          <div class="w-full h-28 absolute -top-28 bg-[#02F67C] z-10"></div>
          <div class="w-full h-28 absolute -top-28 bg-black rounded-b-[64px] lg:rounded-b-[100px] z-10"></div>
        </>
      )}
      <div class="max-w-screen-2xl m-auto py-8">
        <div class="px-6 md:px-[2.03rem] flex flex-col lg:flex-row gap-12 lg:justify-between">
          <div class="flex flex-col gap-2">
            <a class="grid" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="130"
                height="37"
                viewBox="0 0 130 37"
                fill="none"
              >
                <path
                  d="M128.964 16.5089L123.598 23.0422C124.671 25.0422 125.879 26.9089 127.086 28.6422C127.891 29.7089 128.159 31.1755 127.756 32.5089V32.6422C127.22 34.5089 125.61 35.9755 123.598 36.1088C122.391 36.2422 121.184 36.2422 119.977 36.2422C118.769 36.2422 117.562 36.2422 116.355 36.1088C115.148 35.9755 114.209 35.4422 113.404 34.6422C112.599 35.4422 111.66 35.9755 110.453 36.1088C109.38 36.2422 108.039 36.2422 106.831 36.2422C105.49 36.2422 104.283 36.2422 103.21 36.1088C102.539 35.9755 102.003 35.8422 101.466 35.5755C99.9906 35.9755 98.381 36.1088 96.7714 36.1088C93.2839 36.1088 90.8695 35.1755 88.9916 33.9755C87.382 35.3089 85.3699 36.1088 83.0897 36.1088C80.2728 36.1088 78.5291 34.9089 77.456 33.9755C75.0416 35.3089 72.0906 36.1088 69.1397 36.1088C66.1887 36.1088 63.506 35.3089 61.494 33.9755C61.0916 34.2422 60.6892 34.5089 60.2868 34.6422C58.2748 35.5755 55.5921 36.1088 53.0435 36.1088C48.8853 36.1088 46.2027 34.7755 44.4589 33.3088C44.1906 33.5755 43.7882 33.8422 43.3858 34.1089C39.7642 35.9755 35.8743 36.1088 34.2647 36.1088C28.3628 36.1088 25.4118 33.5755 23.8022 31.4422C23.668 31.3089 23.5339 31.1755 23.5339 30.9089C20.8512 34.1089 17.3637 36.1088 12.2666 36.1088C7.70603 36.1088 4.0844 34.3755 1.93824 31.4422C-0.342043 28.1089 -0.610312 23.5755 1.13344 18.7755C3.54786 12.5089 9.31565 8.50885 16.2906 8.50885C16.2906 8.50885 16.4248 8.50885 16.5589 8.50885C16.5589 8.37552 16.5589 8.10885 16.5589 7.97552C16.4248 5.84219 17.9003 3.84219 20.0464 3.04219L26.3507 0.642187C27.0214 0.375521 27.6921 0.242188 28.3628 0.242188C30.3748 0.242188 32.2527 1.30885 33.1916 3.17552L35.8743 8.64219C36.6791 8.50885 37.4839 8.50885 38.2887 8.50885C42.0445 8.50885 45.2637 9.84219 47.2757 12.2422C50.3608 9.84219 54.2507 8.50885 58.543 8.50885C60.8233 8.50885 62.8353 8.90885 64.5791 9.70885C64.8474 9.84219 65.2498 10.1089 65.518 10.3755C67.9324 9.17552 70.6152 8.50885 73.432 8.50885C77.8584 8.50885 81.6142 10.2422 83.7603 13.3089C84.8334 14.9089 85.5041 16.6422 85.7723 18.6422C88.455 12.5089 94.7594 8.50885 102.003 8.50885C103.612 8.50885 105.356 8.77552 106.697 9.17552C106.966 9.04219 107.234 9.04219 107.636 9.04219C108.709 8.77552 109.782 8.77552 110.856 8.77552C111.929 8.77552 113.136 8.77552 114.209 8.90885C115.148 9.04219 115.953 9.30885 116.623 9.84219C117.294 9.30885 118.099 8.90885 119.038 8.90885C120.111 8.77552 121.318 8.77552 122.525 8.77552C123.732 8.77552 124.806 8.77552 125.879 9.04219C127.622 9.30885 128.964 10.3755 129.634 11.9755C130.305 13.4422 130.037 15.1755 128.964 16.5089Z"
                  fill="#113032"
                />
                <path
                  d="M117.965 22.3755C119.574 25.7088 121.452 28.6421 123.196 31.1755V31.3088C121.05 31.4421 118.904 31.4421 116.892 31.3088C115.953 29.9755 115.014 27.9755 114.209 25.9755L110.051 31.3088C108.039 31.4421 105.624 31.4421 103.746 31.3088L111.526 21.9755C110.185 19.5755 108.843 17.0421 108.039 13.4421C109.916 13.3088 111.794 13.3088 113.672 13.4421C114.209 15.1755 114.745 17.0421 115.416 18.7755L119.574 13.4421C121.452 13.1755 123.598 13.1755 125.342 13.4421L117.965 22.3755ZM30.7771 11.1755C31.3137 11.3088 31.7161 11.0421 31.4478 10.5088L28.8992 5.30881C28.7651 4.90881 28.2286 4.90881 27.9603 5.04215L21.5218 7.44215C20.9853 7.57548 20.9853 8.10881 21.5218 8.24215L23.5339 8.77548C21.9242 12.2421 20.0464 17.5755 18.4367 20.9088C16.693 24.6421 15.754 27.1755 12.8031 27.1755C9.85213 27.1755 9.31559 24.9088 10.6569 21.5755C12.1324 17.7088 14.5468 16.6421 17.3637 17.4421C18.1685 16.3755 18.705 14.7755 18.9733 13.3088C18.1685 13.0421 17.2295 13.0421 16.4247 13.0421C11.8641 13.0421 7.43771 15.3088 5.69396 20.2421C3.1454 26.5088 5.29155 31.4421 12.2665 31.4421C17.3637 31.4421 20.1805 29.1755 23.5339 22.1088C25.4117 18.2421 26.8872 14.3755 28.7651 10.6421L30.7771 11.1755ZM44.1906 19.8421C42.9834 23.0421 39.0935 24.3755 31.7161 24.2421C31.7161 26.3755 33.1915 27.3088 35.8742 27.3088C37.7521 27.3088 39.7641 26.9088 41.1055 26.1088C41.5079 27.4421 41.5079 28.6421 41.2396 29.8421C38.9593 31.0421 36.2766 31.3088 34.2646 31.3088C26.6189 31.3088 25.5459 25.5755 27.1555 21.1755C28.631 16.9088 32.655 13.0421 38.1545 13.0421C43.3858 13.1755 45.5319 16.5088 44.1906 19.8421ZM37.3497 16.9088C35.2036 16.9088 33.5939 18.2421 32.655 20.5088C37.2156 20.5088 38.8252 19.8421 39.2276 18.7755C39.4959 17.9755 39.2276 16.9088 37.3497 16.9088ZM58.2747 17.4421C59.2136 17.4421 60.1526 17.5755 60.6891 17.9755C61.6281 16.6421 62.2987 15.3088 62.2987 13.9755C61.4939 13.5755 60.0184 13.3088 58.2747 13.3088C52.3728 13.3088 47.6781 16.7755 45.9343 21.5755C44.3247 26.1088 45.5319 31.7088 53.0435 31.7088C55.0555 31.7088 57.0675 31.3088 58.4088 30.6421C58.8112 29.3088 58.9454 27.9755 58.543 26.6421C57.604 27.0421 56.2627 27.4421 54.7872 27.4421C51.0314 27.4421 50.629 24.6421 51.4338 22.2421C52.3728 19.4421 54.6531 17.4421 58.2747 17.4421ZM84.4309 25.3088C82.1507 25.3088 80.9434 26.7755 80.4069 28.1088C79.8704 29.7088 80.541 31.5755 83.0896 31.5755C85.2357 31.5755 86.5771 30.2421 87.1136 28.9088C87.6502 27.1755 87.1136 25.3088 84.4309 25.3088ZM80.541 23.7088C78.6632 28.6421 74.2367 31.4421 69.1396 31.4421C62.2987 31.4421 60.2867 26.1088 62.0305 21.0421C63.6401 16.5088 67.7983 13.1755 73.2978 13.1755C80.2728 13.1755 82.4189 18.3755 80.541 23.7088ZM72.6271 17.3088C70.0785 17.3088 68.3348 19.5755 67.6641 21.8421C66.7252 24.6421 67.2617 27.4421 70.0785 27.4421C72.493 27.4421 74.2367 25.3088 75.0415 23.0421C75.8463 20.2421 75.5781 17.3088 72.6271 17.3088ZM98.5151 27.1755C94.7593 27.1755 94.3569 24.3755 95.1617 21.9755C96.1006 19.4421 98.3809 17.4421 102.003 17.4421C102.942 17.4421 103.88 17.5755 104.417 17.9755C105.356 16.6421 106.027 15.3088 106.027 13.9755C105.222 13.5755 103.746 13.3088 102.003 13.3088C96.1006 13.3088 91.4059 16.7755 89.6622 21.5755C88.0526 26.1088 89.2598 31.7088 96.7713 31.7088C98.7833 31.7088 100.795 31.3088 102.137 30.6421C102.539 29.3088 102.673 27.9755 102.271 26.6421C101.332 26.7755 99.9905 27.1755 98.5151 27.1755Z"
                  fill="#02F67C"
                />
              </svg>
            </a>
            <span class="text-[#113032]">© 2023 All rights reserved</span>
          </div>

          {menu && <SubMenu menu={menu} />}
          <div class="flex flex-col md:flex-row md:items-center lg:items-end lg:flex-col md:justify-between lg:justify-end gap-6 lg:gap-4">
            <ul class="flex flex-row justify-items-start md:justify-end items-start gap-4">
              <li>
                <a
                  href={social?.linkedinUrl}
                  target="_blank"
                  class="flex justify-center items-center px-3  h-10 w-10 hover:bg-[#FFFFFF1A] rounded-[56px] p-2 transition duration-500"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 2C2.44772 2 2 2.44772 2 3V15C2 15.5523 2.44772 16 3 16H15C15.5523 16 16 15.5523 16 15V3C16 2.44772 15.5523 2 15 2H3ZM0 3C0 1.34315 1.34315 0 3 0H15C16.6569 0 18 1.34315 18 3V15C18 16.6569 16.6569 18 15 18H3C1.34315 18 0 16.6569 0 15V3ZM5 4C5.55228 4 6 4.44772 6 5V5.01C6 5.56228 5.55228 6.01 5 6.01C4.44772 6.01 4 5.56228 4 5.01V5C4 4.44772 4.44772 4 5 4ZM5 7C5.55228 7 6 7.44772 6 8V13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13V8C4 7.44772 4.44772 7 5 7ZM8 13C8 13.5523 8.44772 14 9 14C9.55229 14 10 13.5523 10 13V10C10 9.73478 10.1054 9.48043 10.2929 9.29289C10.4804 9.10536 10.7348 9 11 9C11.2652 9 11.5196 9.10536 11.7071 9.29289C11.8946 9.48043 12 9.73478 12 10V13C12 13.5523 12.4477 14 13 14C13.5523 14 14 13.5523 14 13V10C14 9.20435 13.6839 8.44129 13.1213 7.87868C12.5587 7.31607 11.7957 7 11 7C10.5483 7 10.1071 7.10187 9.70711 7.29289C9.52614 7.11193 9.27614 7 9 7C8.44772 7 8 7.44772 8 8V13Z"
                      fill="#113032"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={social?.gitUrl}
                  target="_blank"
                  class="flex justify-center items-center px-3  h-10 w-10 hover:bg-[#FFFFFF1A] rounded-[56px] p-2 transition duration-500"
                >
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.08129 1.32705C9.0029 0.894839 10.9966 0.89484 12.9183 1.32705C14.0203 0.639647 14.8877 0.314001 15.5373 0.172775C15.8984 0.0942913 16.1896 0.0733675 16.4126 0.0783227C16.5238 0.0807943 16.617 0.0896829 16.6924 0.100685C16.73 0.10618 16.763 0.112182 16.7915 0.11813C16.8057 0.121103 16.8187 0.124059 16.8306 0.126927L16.8476 0.131152L16.8555 0.133197L16.8592 0.134199L16.8611 0.134695C16.862 0.134941 16.8629 0.135187 16.5998 1.09995L16.8629 0.135187C17.1513 0.213848 17.3894 0.417425 17.5119 0.690121C17.99 1.75426 18.0941 2.94238 17.8181 4.06386C18.5792 5.04115 18.9985 6.24875 18.9998 7.49893V7.49995C18.9998 10.0067 18.2548 11.7424 16.9544 12.8684C16.0795 13.6259 15.0274 14.0402 13.9744 14.2752C14.013 14.5735 14.0076 14.9167 14.0028 15.2231C14.0012 15.3199 13.9998 15.4131 13.9998 15.5V19C13.9998 19.5522 13.5521 20 12.9998 20C12.4475 20 11.9998 19.5522 11.9998 19V15.5C11.9998 15.3671 12.0014 15.2451 12.003 15.137L12.0033 15.116C12.0048 15.0146 12.006 14.9293 12.006 14.85C12.006 14.6772 11.9995 14.5811 11.9884 14.5143C11.9793 14.4601 11.9681 14.4312 11.9531 14.4038C11.9351 14.3708 11.8941 14.3085 11.7927 14.2071C11.5204 13.9347 11.4286 13.5302 11.5568 13.1671C11.685 12.8039 12.0103 12.5467 12.3932 12.5056C13.7267 12.3628 14.8528 12.0426 15.6452 11.3565C16.3946 10.7076 16.9996 9.59361 16.9998 7.50097C16.9988 6.56572 16.6339 5.66756 15.9824 4.99662C15.7126 4.71884 15.6275 4.31029 15.7638 3.94788C15.9823 3.36693 16.0256 2.73981 15.8959 2.14233C15.4571 2.24792 14.7176 2.52324 13.6545 3.232C13.4172 3.39018 13.1237 3.43954 12.8477 3.36767C10.9802 2.8813 9.0193 2.8813 7.15181 3.36767C6.87585 3.43954 6.58234 3.39018 6.34507 3.232C5.28193 2.52324 4.54248 2.24792 4.10369 2.14233C3.97399 2.73981 4.01722 3.36693 4.23574 3.94788C4.37207 4.31029 4.28692 4.71884 4.01716 4.99662C3.36571 5.66745 3.00084 6.56543 2.99977 7.50052C2.99988 9.59345 3.60488 10.7075 4.35435 11.3565C5.14678 12.0426 6.27283 12.3628 7.60631 12.5056C7.98923 12.5467 8.31456 12.8039 8.44275 13.1671C8.57094 13.5302 8.4792 13.9347 8.20688 14.2071C8.0402 14.3737 7.99192 14.4961 7.96928 14.6138C7.93886 14.772 7.94333 14.9862 7.99205 15.3759C7.99719 15.4171 7.99977 15.4585 7.99977 15.5V16.977C8.00013 16.9925 8.00013 17.0079 7.99977 17.0233V19C7.99977 19.5522 7.55206 20 6.99977 20C6.44749 20 5.99977 19.5522 5.99977 19V18.2565C5.34544 18.3417 4.7551 18.3054 4.21791 18.1552C3.33724 17.9088 2.72422 17.3908 2.27017 16.8686C1.99028 16.5468 1.70748 16.1356 1.48789 15.8164C1.39387 15.6798 1.31143 15.5599 1.24579 15.4712C0.956042 15.0794 0.804789 14.985 0.717606 14.9593C0.187764 14.8035 -0.115429 14.2476 0.0404073 13.7178C0.196243 13.1879 0.752096 12.8847 1.28194 13.0406C2.04476 13.2649 2.531 13.8455 2.85376 14.2819C3.00791 14.4903 3.12957 14.6691 3.24159 14.8338C3.41557 15.0896 3.56631 15.3112 3.77938 15.5563C4.07532 15.8966 4.37481 16.1223 4.75664 16.2291C5.04069 16.3086 5.43671 16.3405 5.99977 16.2312V15.5611C5.9531 15.174 5.91721 14.7249 5.99909 14.2693C4.95474 14.0334 3.91278 13.6196 3.04519 12.8684C1.74473 11.7424 0.999773 10.0067 0.999773 7.49995V7.49893C1.00105 6.24874 1.42037 5.04115 2.18149 4.06386C1.90547 2.94238 2.0095 1.75426 2.48761 0.690121C2.61013 0.417425 2.84823 0.213848 3.13666 0.135187L3.39977 1.09995C3.13666 0.135187 3.13756 0.134941 3.13847 0.134695L3.1403 0.134199L3.14406 0.133197L3.15191 0.131152L3.1689 0.126927C3.18081 0.124059 3.19387 0.121103 3.2081 0.11813C3.23655 0.112182 3.26957 0.10618 3.30719 0.100685C3.38252 0.0896829 3.47571 0.0807943 3.58693 0.0783227C3.80992 0.0733675 4.10118 0.0942913 4.4622 0.172775C5.11184 0.314001 5.97923 0.639647 7.08129 1.32705Z"
                      fill="#113032"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={social?.discordUrl}
                  target="_blank"
                  class="flex justify-center items-center px-3  h-10 w-10 hover:bg-[#FFFFFF1A] rounded-[56px] p-2 transition duration-500"
                >
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.89088 0.00596839C7.33738 -0.0431316 7.76183 0.211519 7.92866 0.628586L8.80028 2.80764C9.2026 2.76943 9.60036 2.74998 10.0002 2.74998C10.4 2.74998 10.7978 2.76943 11.2001 2.80764L12.0717 0.628586C12.2381 0.212642 12.6608 -0.0418983 13.1063 0.00561726C14.675 0.172951 16.4134 0.524172 18.0718 1.67945C18.2436 1.79913 18.3735 1.96973 18.4432 2.16717C19.4648 5.06199 20.0268 7.59672 20.2447 9.64417C20.4584 11.6525 20.354 13.3085 19.9286 14.3715C19.9183 14.3973 19.9069 14.4226 19.8945 14.4475C19.5228 15.1902 18.9608 16.0398 18.2572 16.7192C17.5684 17.3843 16.6228 18 15.5002 18C15.1458 18 14.8675 17.841 14.7332 17.7554C14.5688 17.6506 14.4162 17.5203 14.2831 17.3922C14.0142 17.1332 13.7388 16.7989 13.4935 16.4484C13.2469 16.0962 13.0103 15.6985 12.8313 15.3028C12.7927 15.2175 12.7545 15.1273 12.7184 15.0334C10.8875 15.3214 9.12659 15.3222 7.29599 15.0356C7.26721 15.1165 7.23689 15.1949 7.20609 15.27C7.04498 15.6629 6.83097 16.0596 6.60587 16.4126C6.38241 16.7631 6.12927 17.0999 5.8783 17.3626C5.75436 17.4924 5.60908 17.6272 5.44895 17.7369C5.31989 17.8254 5.03773 18 4.66818 18C3.56279 18 2.64592 17.3653 1.99189 16.702C1.31998 16.0206 0.785152 15.1706 0.432385 14.43C0.420828 14.4058 0.410253 14.3811 0.400686 14.3559C-0.000959605 13.3015 -0.101003 11.6546 0.10215 9.64919C0.309139 7.6059 0.84332 5.07432 1.81526 2.18149C1.88109 1.98554 2.00604 1.8148 2.1729 1.69278C3.75886 0.533021 5.34854 0.175572 6.89088 0.00596839ZM5.30889 14.6204C5.11571 14.5704 4.92128 14.5174 4.72547 14.4615C4.19444 14.3098 3.88695 13.7563 4.03867 13.2253C4.19039 12.6942 4.74388 12.3867 5.27492 12.5385C8.59536 13.4872 11.405 13.4872 14.7255 12.5385C15.2565 12.3867 15.81 12.6942 15.9617 13.2253C16.1134 13.7563 15.806 14.3098 15.2749 14.4615C15.088 14.5149 14.9024 14.5656 14.7179 14.6136C14.8296 14.837 14.9735 15.0751 15.1319 15.3015C15.3241 15.576 15.5175 15.8043 15.6704 15.9515C15.6813 15.962 15.6916 15.9717 15.7012 15.9806C16.0396 15.9174 16.4371 15.6966 16.8679 15.2805C17.3613 14.8041 17.7909 14.1718 18.0858 13.5922C18.319 12.9748 18.455 11.7265 18.2559 9.85579C18.0646 8.05776 17.5747 5.78526 16.6668 3.14715C15.7091 2.54525 14.6993 2.25478 13.6409 2.0907L13.2217 3.13869C13.7164 3.24941 14.2308 3.383 14.7749 3.53845C15.306 3.69018 15.6134 4.24366 15.4617 4.7747C15.31 5.30573 14.7565 5.61322 14.2255 5.4615C12.5227 4.97499 11.2468 4.74998 10.0002 4.74998C8.75358 4.74998 7.4777 4.97499 5.77492 5.4615C5.24388 5.61322 4.69039 5.30573 4.53867 4.7747C4.38695 4.24366 4.69444 3.69018 5.22547 3.53845C5.76955 3.383 6.28401 3.24941 6.77864 3.13869L6.36144 2.0957C5.3887 2.25794 4.49278 2.54328 3.60772 3.13C2.74205 5.7714 2.27459 8.04804 2.09197 9.85076C1.90202 11.7258 2.03124 12.9832 2.25657 13.6086C2.53837 14.1905 2.94779 14.8229 3.41598 15.2977C3.80445 15.6917 4.15353 15.8991 4.44205 15.9707C4.57768 15.8267 4.74862 15.6054 4.91949 15.3374C5.06924 15.1025 5.20505 14.8536 5.30889 14.6204ZM15.8082 16.0688C15.8071 16.0681 15.8057 16.0672 15.8041 16.0661C15.8193 16.0742 15.8212 16.0771 15.8082 16.0688ZM5.00019 8.99998C5.00019 7.89541 5.89562 6.99998 7.00019 6.99998C8.10476 6.99998 9.00019 7.89541 9.00019 8.99998C9.00019 10.1045 8.10476 11 7.00019 11C5.89562 11 5.00019 10.1045 5.00019 8.99998ZM11.0002 8.99998C11.0002 7.89541 11.8956 6.99998 13.0002 6.99998C14.1048 6.99998 15.0002 7.89541 15.0002 8.99998C15.0002 10.1045 14.1048 11 13.0002 11C11.8956 11 11.0002 10.1045 11.0002 8.99998Z"
                      fill="#113032"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            {extraLinks && extraLinks?.length > 0 && (
              <div class="flex flex-col md:flex-row gap-5 lg:gap-10 text-[#113032]">
                {extraLinks.map((item) => (
                  <a
                    target="_blank"
                    class="link text-sm hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
