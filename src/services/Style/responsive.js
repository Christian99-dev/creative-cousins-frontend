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

  const desktopXL = Math.round(desktop * ratioDesktopXL);
  const laptop = Math.round(desktop * ratioLaptop);
  const tablet = Math.round(desktop * ratioTablet);
  const mobile = Math.round(desktop * ratioMobile);

  return `
      ${name} : ${desktop}${end};
      @media ${device.desktopXL}    {${name} : ${desktopXL}${end}}
      @media ${device.laptop}       {${name} : ${laptop}${end}}
      @media ${device.tablet}       {${name} : ${tablet}${end}}
      @media ${device.mobile}       {${name} : ${mobile}${end}}
    `;
};
