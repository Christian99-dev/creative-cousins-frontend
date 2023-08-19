import { device, size } from "../../theme/breakpoints";

export const responsiveCSS = (
  name,
  desktopXL,
  desktop,
  laptop,
  tablet,
  mobile,
  end = "px"
) => {
  return `
    ${name} : ${desktop}${end};
    @media ${device.desktopXL}    {${name} : ${desktopXL}${end}}
    @media ${device.laptop}       {${name} : ${laptop}${end}}
    @media ${device.tablet}       {${name} : ${tablet}${end}}
    @media ${device.mobile}       {${name} : ${mobile}${end}}
  `;
};

export const responsiveCSSauto = (name, desktop, end = "px") => {
  const ratioDesktopXL = 1.5;
  const ratioLaptop = size.laptop / size.desktop;
  const ratioTablet = size.tablet / size.desktop;
  const ratioMobile = ratioTablet

  const desktopXL = desktop * ratioDesktopXL;
  const laptop = desktop * ratioLaptop;
  const tablet = desktop * ratioTablet;
  const mobile = desktop * ratioMobile;

  return `
      ${name} : ${desktop}${end};
      @media ${device.desktopXL}    {${name} : ${desktopXL}${end}}
      @media ${device.laptop}       {${name} : ${laptop}${end}}
      @media ${device.tablet}       {${name} : ${tablet}${end}}
      @media ${device.mobile}       {${name} : ${mobile}${end}}
    `;
};
