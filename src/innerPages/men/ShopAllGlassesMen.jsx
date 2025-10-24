import React, { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown, X } from "lucide-react";
import rayban from "../../assets/brands/rayban.jpg";
import oakley from "../../assets/brands/oakley.jpg";
import persol from "../../assets/brands/persol.jpg";
import versace from "../../assets/brands/versace.jpg";
import coach from "../../assets/brands/coach.jpg";
import ottoto from "../../assets/brands/ottoto.jpg";
import burberry from "../../assets/brands/burberry.jpg";
import ax from "../../assets/brands/ax.jpg";
import mk from "../../assets/brands/mk.jpg";
import promobanner from "../../components/PromoBanner";
import PromoBanner from "../../components/PromoBanner";
import Footer from "../../components/Footer"


const ShopAllGlassesMen = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [selectedBrandLetter, setSelectedBrandLetter] = useState(null);
  const [products, setProducts] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [loading, setLoading] = useState(true);

  const topTabs = ["Designer Glasses", "Rx Sunglasses", "On Sale", "Bestsellers", "RayBan"];

  // SVG Icon Components for Frame Shapes
  const CatEyeIcon = () => (
    <svg width="60" height="24" viewBox="0 0 70 28" fill="currentColor">
      <path d="M66.927 3.001c-2.143-.428-8.357-1.357-15.285-.857-8.714.571-13.142 5-16.642 5s-8-4.357-16.642-5c-7-.429-13.142.5-15.356.857-.429.143-.786.572-.786 1v1.857c0 .286.143.572.357.714C4.93 8.715 4.287 22.286 18.143 23.93h.43C30.285 23.857 31.856 13 33.428 11.358c.5-.643 1.571-.643 1.571-.643s1 0 1.571.643C38.071 13 39.714 23.858 51.428 24h.428c13.857-1.571 13.285-15.213 15.57-17.356.215-.214.358-.429.358-.714V4.072c0-.5-.357-.928-.857-1.07ZM19 22.93c-6.857 0-14.142-8.071-12.57-15.071.213-.857.642-1.643 1.356-2.143 5.357-4.214 21-1.785 22.856 3.786C31.999 15.93 26.142 22.93 19 22.93Zm31.998 0c-7.214 0-13-7-11.642-13.428 1.857-5.571 17.499-8 22.856-3.786.714.572 1.143 1.286 1.357 2.143 1.571 7-5.714 15.07-12.57 15.07Z" />
    </svg>
  );

  const SquareIcon = () => (
    <svg width="60" height="24" viewBox="0 0 70 28" fill="currentColor">
      <path d="M67.504 4.083C57.417.36 42.054 2.764 35.07 2.764c-6.983 0-22.269-2.405-32.433 1.32-.388.154-.699.542-.699.93v1.863c0 .31.078.62.233.93 1.63 3.182 1.242 10.941 4.035 13.657 2.949 3.336 17.846 3.181 20.872.698 2.56-2.172 5.199-10.164 5.665-11.25.387-1.087 2.25-1.01 2.25-1.01s1.862-.077 2.25 1.01c.465 1.163 3.103 9.155 5.664 11.25 3.026 2.483 17.924 2.638 20.872-.698 2.794-2.716 2.406-10.475 4.035-13.656.155-.31.233-.621.233-.931V5.014c.077-.388-.155-.776-.543-.93Zm-41.047 16.76c-2.715 2.871-17.147 1.94-19.242-.233C5.12 18.438 3.878 9.747 5.818 5.945c1.785-3.802 23.898-2.638 24.907 0 1.242 2.794-1.552 12.027-4.268 14.898Zm36.469-.233c-2.095 2.173-16.605 3.104-19.243.233-2.638-2.87-5.51-12.104-4.268-14.82 1.01-2.638 23.123-3.802 24.907 0 1.94 3.802.699 12.415-1.396 14.587Z" />
    </svg>
  );

  const RectangleIcon = () => (
    <svg width="60" height="24" viewBox="0 0 70 22" fill="currentColor">
      <path d="M68.95 5.382c-1.709-.371-7.875-1.56-15.898-1.337-9.509.297-13.669 2.08-18.126 1.857-4.458.223-8.618-1.56-18.127-1.857C8.776 3.748 2.61 5.01.901 5.382c-.297.074-.445.297-.445.594v2.972a.48.48 0 0 0 .445.446h.669c.594 0 1.189.445 1.189 1.114.371 3.566 1.04 6.315 2.005 8.395.372.891 1.189 1.486 2.08 1.783 6.686 1.782 12.704 1.485 17.681.668.372-.074.743-.148 1.115-.297a4.053 4.053 0 0 0 2.08-1.931c1.411-2.452 2.451-5.498 3.268-8.99a2.162 2.162 0 0 1 1.709-1.56c.743-.074 1.486-.148 2.303-.148.743 0 1.56.074 2.303.148.817.075 1.486.743 1.709 1.56.817 3.492 1.857 6.538 3.268 8.99.446.817 1.189 1.485 2.08 1.931.372.149.743.297 1.115.297 4.977.817 10.994 1.114 17.68-.668.966-.223 1.71-.892 2.08-1.783.966-2.08 1.71-4.903 2.006-8.395.075-.594.595-1.114 1.19-1.114h.668a.48.48 0 0 0 .445-.446V5.976c-.148-.297-.371-.594-.594-.594ZM26.754 18.828c-.446.669-1.114 1.115-1.857 1.412-4.012 1.337-13 1.04-17.978-.446-.52-.148-1.04-.52-1.263-1.04-1.337-2.452-2.229-8.469-1.635-11.44.149-.595.52-1.04 1.115-1.189 5.869-1.783 18.572-1.337 23.92.594.52.149.818.595.892 1.115.297 2.748-1.486 8.394-3.194 10.994Zm37.367-.148c-.297.52-.743.891-1.263 1.04-4.977 1.486-13.966 1.857-17.978.446-.742-.223-1.411-.743-1.857-1.412-1.783-2.6-3.566-8.246-3.194-11.069.074-.52.446-.966.891-1.114 5.349-1.932 18.053-2.378 23.921-.595.52.149.966.595 1.115 1.189.594 3.046-.297 9.138-1.635 11.515Z" />
    </svg>
  );

  const RoundIcon = () => (
    <svg width="60" height="24" viewBox="0 0 66 25" fill="currentColor">
      <path d="M64.852 10.571h-2.358C61.423 5.071 56.566 1 50.78 1c-5.643 0-10.428 4-11.643 9.286-2.928-1.072-5.714-1.072-8.285 0C29.709 5 24.922 1 19.209 1 13.494 1 8.637 5.071 7.494 10.571H5.21c-.286 0-.572.286-.572.572v.5c0 .286.286.571.572.571h2.07c0 .286-.071.5-.071.786 0 6.571 5.357 12 12 12s12-5.429 12-12c0-.5-.072-1-.072-1.429 2.429-1.142 5-1.142 7.857-.071-.071.5-.071 1-.071 1.5 0 6.571 5.357 12 12 12S62.78 19.571 62.78 13c0-.286 0-.5-.071-.786h2.071c.286 0 .572-.285.572-.571v-.5c.07-.286-.215-.572-.5-.572Zm-24.786.143C41.137 5.714 45.566 2 50.85 2c6 0 10.93 4.929 10.93 11s-4.93 11-11 11c-6.072 0-11-4.929-11-11 0-.786.142-1.571.285-2.286ZM19.209 23.93c-6.072 0-11-4.929-11-11 0-6.072 5-10.929 11-10.929s11 4.929 11 11-4.929 10.929-11 10.929Z" />
    </svg>
  );

  const GeometricIcon = () => (
    <svg width="60" height="24" viewBox="0 0 62 19" fill="currentColor">
      <path d="M61.236 8.286h-1.913a3.034 3.034 0 0 0-.547-.752L54.2 2.888A3.169 3.169 0 0 0 52.013 2h-6.491c-.82 0-1.572.342-2.186.888L38.69 7.534c-.274.273-.479.547-.615.888l-.069.069c-.82-.479-1.981-.684-3.28-.684-1.16 0-2.322.205-3.142.615-.137-.341-.342-.615-.615-.888l-4.578-4.646C25.845 2.342 25.025 2 24.205 2h-6.49c-.82 0-1.572.342-2.187.888l-4.51 4.578a3.213 3.213 0 0 0-.614.82H8.627a.467.467 0 0 0-.478.478v.41c0 .273.205.478.478.478h1.435v6.627c0 .82.342 1.64.888 2.187l4.646 4.646c.547.546 1.367.888 2.187.888h6.49c.82 0 1.572-.342 2.187-.888l4.646-4.646c.546-.547.888-1.367.888-2.187V9.242c.683-.41 1.776-.615 2.87-.615 1.23 0 2.322.274 3.006.684v6.832c0 .82.341 1.64.888 2.186l4.646 4.646c.546.547 1.366.888 2.186.888h6.49c.82 0 1.572-.341 2.187-.888l4.646-4.646c.547-.546.888-1.366.888-2.186v-6.56h1.572a.467.467 0 0 0 .478-.477v-.342c-.137-.273-.342-.478-.615-.478ZM58.64 9.652v6.627c0 .547-.205 1.094-.615 1.435l-4.646 4.646c-.41.41-.888.615-1.435.615h-6.49c-.547 0-1.025-.205-1.435-.615l-4.646-4.646c-.273-.41-.478-.888-.478-1.434V9.72c0-.546.204-1.093.614-1.434l4.646-4.646c.41-.41.889-.615 1.435-.615h6.49c.547 0 1.026.205 1.436.615l4.509 4.577c.41.41.615.889.615 1.435Zm-27.74 0v6.627c0 .547-.204 1.025-.546 1.435l-4.646 4.646c-.41.41-.888.615-1.435.615h-6.49c-.547 0-1.025-.205-1.435-.615l-4.646-4.646c-.41-.41-.615-.888-.615-1.434V9.651c0-.546.205-1.093.615-1.435l4.646-4.646c.41-.41.888-.614 1.435-.614h6.49c.547 0 1.025.204 1.435.614l4.646 4.646c.342.41.547.889.547 1.435Z" />
    </svg>
  );

  const WrapIcon = () => (
    <svg width="60" height="24" viewBox="0 0 68 25" fill="currentColor">
      <path fillRule="evenodd" d="M66.988 3.373c-.04-.347-1.328-1.372-1.816-1.753-.488-.38-.782-.523-1.58-.574-.798-.05-4.889.05-9.27.593-4.03.5-7.53 1.584-11.257 2.74h-.002l-.985.305c-4.104 1.266-7.063 1.252-7.063 1.252s-2.963.015-7.063-1.252c-.309-.095-.616-.19-.922-.286-3.748-1.163-7.273-2.257-11.325-2.759-4.382-.542-8.472-.643-9.27-.593-.8.05-1.093.192-1.582.573C4.364 2 3.077 3.026 3.037 3.373c-.04.347.111.638.422 1.132.311.495.932 1.515 1.012 2.44.08.925.267 2.572.338 3.045.071.473.167.767.47.724.046.78.268 4.019.922 5.364.815 1.677 2.69 3.26 5.42 4.579 3.408 1.645 6.27 2.59 9.565 3.155 1.317.226 2.321.317 3.098.317 1.62 0 2.227-.401 2.559-.803.6-.725 1.578-2.184 1.865-2.853l.236-.551c.256.183.616.258 1.044-.316a11.086 11.086 0 0 0 1.556-2.832c.165-.442.396-1.107.632-1.785.335-.96.68-1.95.86-2.375.305-.725.878-1.192 1.372-1.236.493-.044.605-.046.605-.046s.113 0 .605.046c.493.046 1.066.513 1.373 1.236.18.426.526 1.421.862 2.386.235.674.465 1.334.629 1.774.386 1.03.912 1.987 1.559 2.834.428.574.787.499 1.044.316l.236.55c.287.67 1.265 2.128 1.864 2.854.333.402.938.803 2.56.803.774 0 1.778-.091 3.098-.317 3.294-.565 6.155-1.509 9.564-3.155 2.73-1.319 4.606-2.902 5.42-4.579.654-1.345.876-4.585.922-5.364.303.043.4-.256.47-.724.071-.468.258-2.12.338-3.045.08-.925.7-1.95 1.01-2.442.31-.49.46-.786.421-1.132Zm-36.232 8.471c-.186.392-.786 2.231-.852 2.713a8.054 8.054 0 0 0-.044.4c-.021.24-.035.398-.116.52-.12.181-.506 1.433-.6 1.975a9.37 9.37 0 0 0-.05.322c-.049.325-.078.52-.243.824l-.01.018c-.21.386-.427.785-.217 1.007.072.081.148.158.227.23l-.242.567c-.283.66-1.252 2.103-1.847 2.823-.473.572-1.532 1.14-5.56.449-3.284-.56-6.139-1.505-9.539-3.146-2.71-1.309-4.565-2.875-5.369-4.526-.64-1.317-.867-4.605-.909-5.334.248-.102.223-.429.183-.976a13.728 13.728 0 0 1-.04-.695c-.026-1.055.136-3.14.813-4.104.676-.965 1.549-1.473 4.24-1.372l1.022.035c2.445.082 5.165.174 7.685.688 2.877.588 6.407 1.674 8.765 2.804 2.357 1.131 2.904 1.598 3.13 2.563.211.897-.179 1.702-.384 2.126l-.043.09Zm27.605 8.702c2.71-1.307 4.564-2.873 5.369-4.525h.001c.64-1.318.866-4.605.91-5.334-.248-.102-.224-.427-.183-.974.015-.202.032-.435.039-.698.027-1.055-.133-3.138-.812-4.104-.68-.967-1.555-1.473-4.244-1.372l-1.035.036c-2.44.081-5.155.172-7.671.686-2.88.589-6.41 1.674-8.765 2.805-2.354 1.13-2.903 1.597-3.13 2.561-.212.9.18 1.71.385 2.132l.041.085c.187.392.786 2.23.853 2.713.021.155.033.287.043.4.021.24.035.397.117.52.12.18.506 1.432.6 1.975.02.12.035.223.049.316.049.328.077.522.243.83l.015.026c.209.385.42.777.212.998a3.02 3.02 0 0 1-.227.23l.244.569c.283.66 1.252 2.104 1.847 2.823.473.572 1.534 1.14 5.56.449 3.286-.564 6.139-1.506 9.539-3.147Z" clipRule="evenodd" />
    </svg>
  );

  const OvalIcon = () => (
    <svg width="60" height="24" viewBox="0 0 64 25" fill="currentColor">
      <path d="M63.874 7.351h-2.772c-.473-1.285-1.285-2.299-2.3-3.11-3.313-2.502-9.737-2.976-14.538-1.082-4.328 1.69-5.274 5.071-5.41 5.747a.513.513 0 0 1-.27-.135c-.203-.135-.338-.27-.54-.54-.474-.542-1.218-1.42-2.976-1.42-1.69 0-2.435.81-2.976 1.42v.067c-.202.203-.338.406-.473.473-.135.068-.203.135-.338.135-.135-.676-1.082-4.057-5.41-5.747-4.936-1.894-11.293-1.42-14.606 1.082-1.082.811-1.826 1.825-2.3 3.11h-2.84v1.826h2.3c-.338 2.096 0 4.125.203 5.207.203.879 2.096 8.723 9.264 9.534 6.086.677 10.143-2.975 11.766-6.424 1.488-3.11 2.029-5.342 1.758-7.303.203-.067.406-.135.676-.27.406-.203.677-.541.88-.812.473-.54.878-1.014 2.028-1.014 1.217 0 1.555.473 2.029 1.014l.067.068c.203.27.474.54.88.744.202.135.473.203.676.27-.27 2.029.27 4.193 1.758 7.303 1.488 3.111 5.004 6.492 10.278 6.492.474 0 .947 0 1.488-.068 7.1-.811 9.061-8.655 9.197-9.534.202-1.014.54-3.11.202-5.207h2.3V7.351ZM39.801 9.177s.541-3.381 4.801-5.072c1.826-.743 3.922-1.082 6.086-1.082 3.043 0 5.816.744 7.506 2.03 3.246 2.433 2.57 7.235 2.164 9.128-.135.676-.744 3.11-2.434 5.207-1.556 2.096-3.584 3.246-5.95 3.516-.474.068-.948.068-1.353.068-4.87 0-8.115-3.178-9.467-5.95-1.623-3.45-2.097-5.681-1.488-7.777l.135-.068ZM28.78 17.089c-1.285 2.705-4.598 5.95-9.467 5.95-.406 0-.812 0-1.353-.067-2.366-.27-4.395-1.42-5.95-3.517-1.623-2.096-2.232-4.327-2.435-5.274-.338-1.961-.946-6.695 2.232-9.129 1.69-1.285 4.53-2.029 7.506-2.029 2.164 0 4.26.406 6.086 1.082 4.26 1.69 4.801 5.072 4.801 5.072v.135c.676 2.097.203 4.328-1.42 7.777Z" />
    </svg>
  );

  const AviatorIcon = () => (
    <svg width="60" height="24" viewBox="0 0 63 23" fill="currentColor">
      <path d="M61.762 10.988v-.604C61.762 4.616 57.536 2 48.146 2c-1.207 0-2.28.067-3.353.201A.369.369 0 0 0 44.457 2h-18.78c-.134 0-.336.067-.403.201A25.757 25.757 0 0 0 21.921 2C12.598 2 8.37 4.616 8.37 10.451v.604H6.696v1.677H8.44C8.909 20.31 12.128 24 18.232 24c8.518 0 13.95-11.134 14.018-16.03.201-.068.335-.202.335-.403 0-1.878 1.006-2.012 2.415-2.012 1.408 0 2.415.134 2.415 2.012 0 .201.134.403.335.403C37.884 12.866 43.317 24 51.768 24c6.104 0 9.256-3.689 9.793-11.268h1.744v-1.744h-1.543Zm-33.67-8.116h13.884c-2.348.805-3.421 2.146-3.89 3.287-.604-1.543-2.147-1.543-3.086-1.543-.94 0-2.482 0-3.085 1.543-.403-1.14-1.409-2.415-3.824-3.287Zm32.731 7.58c0 8.652-2.884 12.676-8.988 12.676-8.049 0-13.146-10.799-13.146-15.36 0-1.14.67-4.829 9.457-4.829 8.787-.067 12.677 2.28 12.677 7.512ZM31.445 7.767c0 4.561-5.098 15.36-13.146 15.36-6.104 0-8.988-4.024-8.988-12.677 0-5.231 3.89-7.512 12.744-7.512 8.652-.067 9.39 3.689 9.39 4.83Z" />
    </svg>
  );

  const BrowlineIcon = () => (
    <svg width="60" height="24" viewBox="0 0 70 27" fill="currentColor">
      <path d="M18.147 24c-3.466 0-6.184-1.087-8.155-3.262-2.175-2.31-2.99-5.504-3.33-7.747-.34-2.378-.204-4.213-.204-4.35 0-.135.068-1.494 1.427-2.853.816-.816 1.835-1.427 3.194-1.903C12.71 3.34 14.681 3 17.06 3h1.088c4.689.136 8.087 1.088 10.125 2.787 1.631 1.359 1.835 2.854 1.97 3.397v.206c.069.68.205 2.447-.067 4.553-.408 2.719-1.36 4.893-2.854 6.524-2.175 2.31-5.233 3.466-9.174 3.534ZM16.992 3.545c-5.097 0-7.544 1.427-8.699 2.582C7.07 7.351 7.07 8.574 7.07 8.574s-.136 1.903.204 4.213c.34 2.175 1.155 5.233 3.194 7.407 1.835 2.04 4.485 3.058 7.747 3.058 3.737-.067 6.66-1.155 8.562-3.261 2.175-2.379 3.126-6.184 2.718-10.67v-.203c-.611-4.35-6.591-5.505-11.416-5.64a6.218 6.218 0 0 1-1.088.067Z" />
      <path d="M3.264 3.137C16.04 1.303 26.574 1.371 30.72 5.72c.611.611.883 1.495.747 2.378-.204 1.02-.747 1.7-1.563 2.039 0 0 .952-6.456-12.572-6.864-11.96 0-10.6 6.66-10.6 6.66H5.234c-.272 0-.544-.204-.544-.476-.067-1.087-.68-2.038-1.766-2.786-.272-.136-.408-.476-.408-.747V4.02c0-.476.34-.816.747-.884ZM51.853 24c-3.941-.068-7-1.223-9.038-3.466-1.495-1.63-2.447-3.873-2.854-6.523a20.561 20.561 0 0 1-.068-4.554v-.203c.068-.544.272-2.04 1.97-3.398 1.971-1.7 5.369-2.65 10.126-2.786h1.087c2.31 0 4.35.271 5.98.883 1.292.476 2.379 1.087 3.194 1.903 1.291 1.359 1.427 2.718 1.427 2.854 0 .136.136 1.97-.203 4.35-.34 2.242-1.156 5.436-3.33 7.746C58.037 22.913 55.25 24 51.853 24ZM40.504 9.322v.135c-.407 4.486.612 8.223 2.719 10.67 1.902 2.106 4.825 3.262 8.562 3.262 3.262 0 5.844-1.02 7.747-3.058 2.039-2.243 2.854-5.233 3.194-7.408.34-2.378.204-4.213.204-4.213s-.068-1.291-1.291-2.514c-1.156-1.156-3.602-2.515-8.63-2.515H51.92c-4.825.068-10.737 1.223-11.417 5.64 0-.067 0-.067 0 0Z" />
      <path d="M66.735 3.137C53.96 1.303 43.426 1.371 39.281 5.72c-.611.611-.883 1.495-.747 2.378.203 1.02.747 1.7 1.563 2.039 0 0-.952-6.456 12.572-6.864 11.96 0 10.6 6.66 10.6 6.66h1.496c.272 0 .543-.204.543-.476.068-1.087.68-2.038 1.767-2.786.272-.136.408-.476.408-.747V4.02a.884.884 0 0 0-.748-.884Z" />
      <path d="M35 5.448c-1.63-.068-3.058.204-4.281.815l.747 1.835c.068-.747 1.563-1.155 3.534-1.155 1.97-.068 3.466.34 3.534 1.155l.747-1.835c-1.223-.68-2.718-.883-4.281-.815Z" />
    </svg>
  );

  const OversizedIcon = () => (
    <svg width="60" height="24" viewBox="0 0 61 23" fill="currentColor">
      <path d="M60.42 10.237c-.06-2.745.418-8.354-10.562-8.235C38.521 2.002 38.64 8.685 35 8.685c-3.64 0-3.52-6.683-14.858-6.683-10.92-.12-10.443 5.49-10.562 8.235v1.432c.12 2.685.716 7.638 3.162 10.144 2.566 2.685 11.875 2.983 14.978.418 3.401-2.507 5.132-9.488 5.55-10.145.417-.596 1.67-.596 1.67-.596s1.253 0 1.671.596c.418.657 2.148 7.638 5.55 10.145 3.102 2.565 12.352 2.267 14.977-.418 2.447-2.506 3.043-7.46 3.163-10.144.119-.478.12-.955.12-1.432ZM27.9 20.798a4.768 4.768 0 0 1-2.566 1.552c-2.864.716-8.473 1.074-11.337-1.015-2.865-2.327-3.7-9.726-2.805-13.485.418-1.85 1.85-3.402 3.7-3.939h.06c4.833-1.432 14.38-1.074 16.767 5.311.955 4.416-1.79 9.309-3.819 11.576Zm28.165.538c-2.804 2.148-8.473 1.73-11.338 1.014a4.768 4.768 0 0 1-2.566-1.552c-2.028-2.327-4.773-7.16-3.818-11.636 2.386-6.384 11.934-6.742 16.767-5.31h.06a5.586 5.586 0 0 1 3.7 3.938c.895 3.76.119 11.159-2.805 13.546Z" />
    </svg>
  );

  const WayframeIcon = () => (
    <svg width="60" height="24" viewBox="0 0 64 24" fill="currentColor">
      <path fillRule="evenodd" d="m63.562 2.939-.026-.006c-.342-.085-.523-.13-2.858-.496-2.391-.375-7.703-.74-12.857.088-5.154.83-10.746 2.76-10.746 2.76-1.088.328-2.248.325-2.248.325s-1.16.003-2.247-.324c0 0-5.592-1.932-10.746-2.76-5.155-.83-10.466-.464-12.858-.089-2.335.366-2.515.41-2.858.496l-.025.006c-.481.119-.441.36-.323 1.07.026.152.055.325.083.524 0 0 .4 2.591.435 2.789.035.197.14.342.385.381.246.04 1.04.42 1.333 1.67.068.294.187.91.34 1.697.497 2.57 1.348 6.97 1.958 8l.083.14c.758 1.283 1.404 2.376 3.301 3.052 1.967.7 3.493 1 4.633 1.11 1.148.112 3.826.27 6.186-.788 2.508-1.125 3.758-1.904 6.608-7.922.504-1.066.847-1.933 1.123-2.63.739-1.867.997-2.519 2.59-2.519 1.592 0 1.85.652 2.588 2.519.276.697.62 1.564 1.124 2.63 2.85 6.018 4.1 6.797 6.608 7.922 2.36 1.059 5.038.9 6.185.788 1.14-.11 2.667-.41 4.633-1.11 1.897-.676 2.543-1.769 3.302-3.053l.083-.14c.609-1.028 1.46-5.429 1.958-7.998v-.002c.152-.787.271-1.402.34-1.696.292-1.25 1.087-1.63 1.332-1.67.246-.04.35-.184.386-.381.035-.198.435-2.79.435-2.79.028-.197.057-.37.082-.523.119-.71.159-.951-.322-1.07ZM8.372 5.065c-.768 0-1.39-.211-1.39-.472 0-.26.622-.472 1.39-.472.767 0 1.39.211 1.39.472 0 .26-.623.472-1.39.472Zm16.442 16.22c2.679-1.474 4.162-4.814 4.875-7.568.713-2.754.887-5.565 0-6.567-.886-1.001-3.204-2.368-7.634-2.893-4.43-.525-8.043-.942-10.578.669-2.496 1.586-1.288 8.421-.995 10.081l.014.075c.024.137.048.285.074.443.292 1.774.773 4.7 3.225 5.664 2.67 1.05 4.275 1.138 4.275 1.138s4.066.433 6.744-1.041Zm34.345-6.203c-.024.137-.048.285-.074.443-.292 1.774-.773 4.7-3.225 5.664-2.67 1.05-4.275 1.138-4.275 1.138s-4.066.433-6.744-1.041c-2.679-1.475-4.163-4.815-4.876-7.569-.713-2.754-.886-5.565 0-6.567.886-1.001 3.205-2.368 7.634-2.893 4.43-.525 8.044-.942 10.579.669 2.495 1.586 1.288 8.419.994 10.08l-.013.076Zm.877-10.489c0 .26.622.472 1.39.472.768 0 1.39-.211 1.39-.472 0-.26-.622-.472-1.39-.472-.768 0-1.39.211-1.39.472Z" clipRule="evenodd" />
    </svg>
  );

  // SVG Icon Components for Frame Types
  const FullRimIcon = () => (
    <svg width="60" height="24" viewBox="0 0 43 20" fill="none">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.684 10c0 4.896-3.96 8.86-8.843 8.86-4.885 0-8.84-3.964-8.84-8.86s3.955-8.86 8.84-8.86c4.883 0 8.843 3.965 8.843 8.86m6.63 0c0 4.896 3.958 8.86 8.843 8.86C39.04 18.86 43 14.896 43 10s-3.96-8.86-8.843-8.86c-4.885 0-8.842 3.965-8.842 8.86Z" clipRule="evenodd" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.684 10A3.32 3.32 0 0 1 22 6.677 3.32 3.32 0 0 1 25.315 10" />
    </svg>
  );

  const LightweightIcon = () => (
    <svg width="60" height="24" viewBox="0 0 43 20" fill="none">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M18.684 10c0 4.896-3.96 8.86-8.843 8.86-4.885 0-8.84-3.964-8.84-8.86s3.955-8.86 8.84-8.86c4.883 0 8.843 3.965 8.843 8.86m6.63 0c0 4.896 3.958 8.86 8.843 8.86C39.04 18.86 43 14.896 43 10s-3.96-8.86-8.843-8.86c-4.885 0-8.842 3.965-8.842 8.86Z" clipRule="evenodd" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M18.684 10A3.32 3.32 0 0 1 22 6.677 3.32 3.32 0 0 1 25.315 10" />
    </svg>
  );

  const RimlessIcon = () => (
    <svg width="60" height="24" viewBox="0 0 43 20" fill="none">
      <path stroke="currentColor" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.684 10c0 4.896-3.96 8.86-8.843 8.86-4.885 0-8.84-3.964-8.84-8.86s3.955-8.86 8.84-8.86c4.883 0 8.843 3.965 8.843 8.86m6.63 0c0 4.896 3.958 8.86 8.843 8.86C39.04 18.86 43 14.896 43 10s-3.96-8.86-8.843-8.86c-4.885 0-8.842 3.965-8.842 8.86Z" clipRule="evenodd" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.684 10A3.32 3.32 0 0 1 22 6.677 3.32 3.32 0 0 1 25.315 10" />
    </svg>
  );

  const SemiRimlessIcon = () => (
    <svg width="60" height="24" viewBox="0 0 43 20" fill="none">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.684 9.999c0-4.895-3.96-8.86-8.843-8.86-4.885 0-8.84 3.965-8.84 8.86" />
      <path stroke="currentColor" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M1 10.001c0 4.895 3.96 8.86 8.843 8.86 4.885 0 8.84-3.965 8.84-8.86" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M25.314 9.999c0-4.895 3.958-8.86 8.843-8.86C39.04 1.138 43 5.103 43 9.998" />
      <path stroke="currentColor" strokeDasharray="2 4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M43 10.001c0 4.895-3.958 8.86-8.843 8.86-4.883 0-8.843-3.965-8.843-8.86" />
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.684 9.999A3.32 3.32 0 0 1 22 6.676a3.32 3.32 0 0 1 3.315 3.323" />
    </svg>
  );

  const getShapeIcon = (iconType) => {
    const icons = {
      'cateye': <CatEyeIcon />,
      'square': <SquareIcon />,
      'rectangle': <RectangleIcon />,
      'round': <RoundIcon />,
      'geometric': <GeometricIcon />,
      'wrap': <WrapIcon />,
      'oval': <OvalIcon />,
      'aviator': <AviatorIcon />,
      'browline': <BrowlineIcon />,
      'oversized': <OversizedIcon />,
      'wayframe': <WayframeIcon />,
      'fullrim': <FullRimIcon />,
      'lightweight': <LightweightIcon />,
      'rimless': <RimlessIcon />,
      'semirimless': <SemiRimlessIcon />
    };
    return icons[iconType] || null;
  };

  const filterData = {
    shape: {
      title: "Frame Shape",
      options: [
        { name: "Cat Eye", count: 403, icon: "cateye" },
        { name: "Square", count: 348, icon: "square" },
        { name: "Rectangle", count: 248, icon: "rectangle" },
        { name: "Round", count: 184, icon: "round" },
        { name: "Geometric", count: 92, icon: "geometric" },
        { name: "Wrap", count: 74, icon: "wrap" },
        { name: "Oval", count: 59, icon: "oval" },
        { name: "Aviator", count: 47, icon: "aviator" },
        { name: "Browline", count: 38, icon: "browline" },
        { name: "Oversized", count: 31, icon: "oversized" },
        { name: "Wayframe", count: 6, icon: "wayframe" }
      ],
      extraSection: {
        title: "Frame Type",
        options: [
          { name: "Full-Rim", count: 1340, icon: "fullrim" },
          { name: "Lightweight", count: 65, icon: "lightweight" },
          { name: "Rimless", count: 30, icon: "rimless" },
          { name: "Semi-Rimless", count: 28, icon: "semirimless" }
        ]
      }
    },
    size: {
      title: "Size",
      options: [
        { name: "Narrow", count: 205 },
        { name: "Average", count: 1085 },
        { name: "Extra Wide", count: 44 }
      ],
      hasCustom: true
    },
    features: {
      title: "Features",
      options: [
        { name: "Rx Single Vision", count: 1394 },
        { name: "Rx Bifocal/Progressive", count: 1381 },
        { name: "Polycarbonate", count: 88 }
      ]
    },
    brands: {
      title: "Popular Brands",
      showPopular: true,
      popular: [
        { name: "Premium Brands", count: 1033, logo: "✨" },
        { name: "Ray-Ban", count: 90, img: rayban },
        { name: "Oakley", count: 14, img: oakley },
        { name: "Persol", count: 11, img: persol },
        { name: "Versace", count: 29, img: versace },
        { name: "Coach", count: 77, img: coach },
        { name: "ottoto", count: 99, img: ottoto },
        { name: "burberry", count: 85, img: burberry },
        { name: "Armani Exchange", count: 9, img: ax },
        { name: "Michael Kors", count: 55, img: mk }
      ],
      hasAllBrands: true
    },
    color: {
      title: "Color",
      options: [
        { name: "Tortoise", color: "#8B4513" },
        { name: "Clear", color: "#FFFFFF" },
        { name: "Black", color: "#000000" },
        { name: "Gold", color: "#FFD700" },
        { name: "Brown", color: "#8B4513" },
        { name: "Blue", color: "#0000FF" },
        { name: "Shiny Black", color: "#000000" },
        { name: "Pink", color: "#FFC0CB" },
        { name: "Gray", color: "#808080" },
        { name: "Silver", color: "#C0C0C0" },
        { name: "Green", color: "#008000" },
        { name: "Red", color: "#FF0000" },
        { name: "Gunmetal", color: "#2C3539" },
        { name: "Purple", color: "#800080" },
        { name: "Beige", color: "#F5F5DC" },
        { name: "Rose Gold", color: "#B76E79" },
        { name: "White", color: "#FFFFFF" },
        { name: "Multicolor", color: "linear-gradient(90deg, red, orange, yellow, green, blue, purple)" },
        { name: "Matte Black", color: "#28282B" },
        { name: "Orange", color: "#FFA500" },
        { name: "Yellow", color: "#FFFF00" },
        { name: "Bronze", color: "#CD7F32" },
        { name: "Glitter", color: "#E8E8E8" }
      ]
    },
    material: {
      title: "Material",
      options: [
        { name: "Acetate", count: 676 },
        { name: "Plastic", count: 599 },
        { name: "Metal", count: 334 },
        { name: "Stainless Steel", count: 67 },
        { name: "Titanium", count: 24 }
      ]
    },
    price: {
      title: "Price",
      hasSlider: true,
      range: { min: 29, max: 566 },
      options: [
        { name: "Clearance Sale", count: 126 }
      ]
    }
  };

  const brandLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/category/sunglasses"
        );

        const transformed = response.data.products.map((item) => {
          const discount = item.discountPercentage || 0;
          const original = discount > 0 ? Math.round(item.price / (1 - discount / 100)) : null;
          return {
            id: item.id,
            name: item.title,
            image: item.thumbnail,
            salePrice: item.price,
            originalPrice: original,
            colors: Math.floor(Math.random() * 5) + 1,
            isSale: discount > 0,
            isPremium: Math.random() > 0.7,
          };
        });

        setProducts(transformed);
        setTotalProducts(response.data.total);
      } catch (error) {
        console.error("Error fetching glasses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleFilter = (filter) => {
    setActiveFilter(activeFilter === filter ? null : filter);
    setSelectedBrandLetter(null);
  };

  const FilterDropdown = ({ filterKey, data, onClose }) => {
    if (!data) return null;

    const handleClose = () => {
      setActiveFilter(null);
      if (onClose) onClose();
    };

    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 max-h-[400px] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{data.title}</h3>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-600 p-1">
            <X size={20} />
          </button>
        </div>

        {/* Shape Filter with Frame Shape & Frame Type */}
        {filterKey === 'shape' && (
          <>
            <div className="mb-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                {data.options.map((opt, i) => (
                  <button 
                    key={i} 
                    className="border-2 border-gray-200 rounded-lg py-2  hover:border-blue-500 hover:bg-blue-50 transition-all text-center animate-slideRight"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="text-gray-700 mb-1 flex justify-center items-center h-6">
                      {getShapeIcon(opt.icon)}
                    </div>
                    <div className="text-xs font-medium text-gray-900">{opt.name}</div>
                    <div className="text-xs text-gray-500">({opt.count})</div>
                  </button>
                ))}
              </div>
            </div>
              {data.extraSection && (
              <div className="mb-6">
                <h4 className="font-semibold mb-4 text-gray-700">{data.extraSection.title}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {data.extraSection.options.map((opt, i) => (
                    <button 
                      key={i} 
                      className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition-all text-center animate-slideRight"
                      style={{ animationDelay: `${(data.options.length + i) * 50}ms` }}
                    >
                      <div className="text-gray-700 mb-1 flex justify-center items-center h-8">
                        {getShapeIcon(opt.icon)}
                      </div>
                      <div className="text-xs font-medium text-gray-900">{opt.name}</div>
                      <div className="text-xs text-gray-500">({opt.count})</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          
          </>
        )}



            
        {/* Size Filter */}
        {filterKey === 'size' && (
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border flex   border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
                <div className="font-medium text-gray-900">{opt.name}</div>
                <div className="text-sm text-gray-500">({opt.count})</div>
              </button>
            ))}
            {data.hasCustom && (
              <button className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left font-medium text-blue-600">
                Custom Size
              </button>
            )}
          </div>
        )}

        {/* Features Filter */}
        {filterKey === 'features' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
                <div className="font-medium text-gray-900">{opt.name}</div>
                <div className="text-sm text-gray-500">({opt.count})</div>
              </button>
            ))}
          </div>
        )}

        {/* Brands Filter with Popular & All Brands */}
        {filterKey === 'brands' && !selectedBrandLetter && (
          <>
            <div className="flex gap-4 mb-4 border-b pb-2">
              <button className="pb-2 border-b-2 border-black font-semibold">Popular</button>
              <button className="pb-2 text-gray-500 hover:text-gray-900">All Brands</button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
              {data.popular.map((brand, i) => (
                <button key={i} className="border border-gray-200 rounded-lg p-3 hover:border-blue-500 hover:bg-blue-50 transition text-center">
                  <div className="text-xl font-bold mb-1 text-gray-700">{brand.logo}</div>
                  <div className="text-xs font-medium text-gray-900">{brand.name}</div>
                  <div className="text-xs text-gray-500">({brand.count})</div>
                </button>
              ))}
            </div>
            <button 
              onClick={() => setSelectedBrandLetter('all')}
              className="w-full border border-gray-300 rounded-lg p-3 hover:bg-gray-50 flex items-center justify-between text-sm"
            >
              <span className="font-medium text-gray-900">View All Brands</span>
              <span className="text-gray-500">→</span>
            </button>
          </>
        )}

        {/* All Brands Letter Selection */}
        {filterKey === 'brands' && selectedBrandLetter === 'all' && (
          <>
            <button 
              onClick={() => setSelectedBrandLetter(null)}
              className="mb-4 text-blue-600 hover:underline flex items-center text-sm font-medium"
            >
              ← Back to Popular
            </button>
            <div className="flex flex-wrap gap-1 mb-4">
              {brandLetters.map(letter => (
                <button 
                  key={letter}
                  onClick={() => setSelectedBrandLetter(letter)}
                  className="w-8 h-8 border border-gray-300 rounded hover:bg-blue-50 hover:border-blue-500 font-semibold text-sm text-gray-700"
                >
                  {letter}
                </button>
              ))}
            </div>
          </>
        )}

        {/* Selected Letter Brands */}
        {filterKey === 'brands' && selectedBrandLetter && selectedBrandLetter !== 'all' && (
          <>
            <button 
              onClick={() => setSelectedBrandLetter('all')}
              className="mb-4 text-blue-600 hover:underline flex items-center text-sm font-medium"
            >
              ← Back to Letters
            </button>
            <h4 className="text-lg font-bold mb-4 text-gray-900">Brands starting with "{selectedBrandLetter}"</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {Array.from({length: 5}).map((_, i) => (
                <div key={i} className="p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="font-medium text-gray-900">Example Brand {selectedBrandLetter}{i + 1}</div>
                  <div className="text-xs text-gray-500">45 styles</div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Color Filter */}
        {filterKey === 'color' && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border border-gray-200 rounded-lg p-2 hover:border-blue-500 hover:bg-blue-50 transition flex flex-col items-center gap-2">
                <div 
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center" 
                  style={{ 
                    background: opt.color,
                    backgroundImage: opt.color.includes('gradient') ? opt.color : 'none',
                    minHeight: '32px'
                  }}
                >
                  {!opt.color.includes('gradient') && opt.name === 'Clear' && (
                    <span className="text-xs text-gray-500">C</span>
                  )}
                </div>
                <span className="text-xs font-medium text-gray-900 text-center">{opt.name}</span>
              </button>
            ))}
          </div>
        )}

        {/* Material Filter */}
        {filterKey === 'material' && (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
            {data.options.map((opt, i) => (
              <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
                <div className="font-medium text-gray-900">{opt.name}</div>
                <div className="text-sm text-gray-500">({opt.count})</div>
              </button>
            ))}
          </div>
        )}

        {/* Price Filter with Slider */}
        {filterKey === 'price' && (
          <>
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-700">Price Range</h4>
              <input 
                type="range" 
                min={data.range.min} 
                max={data.range.max} 
                defaultValue={data.range.min}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>${data.range.min}</span>
                <span>${data.range.max}</span>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.options.map((opt, i) => (
                <button key={i} className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:bg-blue-50 transition text-left">
                  <div className="font-medium text-gray-900">{opt.name}</div>
                  <div className="text-sm text-gray-500">({opt.count})</div>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <PromoBanner/>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }
        
        .animate-slideRight {
          opacity: 0;
          animation: slideRight 0.4s ease-out forwards;
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #3b82f6;
          cursor: pointer;
          border: none;
        }

        .sale-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          background: #ef4444;
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }

        .premium-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: #fbbf24;
          color: #000;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
        }

        .heart-icon {
          position: absolute;
          top: 8px;
          right: 8px;
          background: white;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
          cursor: pointer;
        }

        .product-card:hover .heart-icon {
          opacity: 1;
        }

        .color-swatches {
          display: flex;
          gap: 4px;
          margin: 8px 0;
        }

        .color-swatch {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: 1px solid #ddd;
          cursor: pointer;
        }

        .delivery-badge {
          background: #10b981;
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 12px;
          margin-right: 8px;
        }

        .price-sale {
          display: flex;
          align-items: baseline;
          gap: 8px;
        }

        .original-price {
          text-decoration: line-through;
          color: #9ca3af;
          font-size: 14px;
        }

        .sale-price {
          font-size: 18px;
          font-weight: bold;
          color: #ef4444;
        }

        .regular-price {
          font-size: 18px;
          font-weight: bold;
          color: #000;
        }

        .action-buttons {
          display: none;
          gap: 8px;
          margin-top: 8px;
        }

        .product-card:hover .action-buttons {
          display: flex;
        }

        .action-btn {
          flex: 1;
          padding: 6px 12px;
          border: 1px solid #d1d5db;
          background: white;
          border-radius: 6px;
          font-size: 12px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .action-btn:hover {
          background: #f3f4f6;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Top Tabs */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Women's Eyeglasses (374)</h1>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {topTabs.map((tab, i) => (
            <button key={i} className="border border-gray-200 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors">
              {tab}
            </button>
          ))}
        </div>

        <div className={`bg-gray-50 rounded-lg px-4 py-3 mb-8 transition-all duration-300 ease-in-out overflow-hidden ${
          activeFilter ? 'min-h-[500px] pb-4' : 'flex flex-wrap justify-between items-center'
        }`}>
          <div className={`flex flex-wrap gap-3 ${activeFilter ? 'w-full mb-4' : ''}`}>
            {Object.keys(filterData).map((filterKey) => (
              <button
                key={filterKey}
                onClick={() => toggleFilter(filterKey)}
                className={`bg-white border rounded-md px-4 py-2 text-sm flex items-center gap-2 capitalize transition-all hover:shadow-sm ${
                  activeFilter === filterKey 
                    ? 'border-blue-500 bg-blue-50 shadow-md' 
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-200 ${activeFilter === filterKey ? 'rotate-180' : ''}`} 
                />
              </button>
            ))}
          </div>
        
          {activeFilter && (
            <div className="w-full mb-4 border-t border-gray-200 pt-4 bg-white rounded-md p-4 shadow-inner">
              <FilterDropdown 
                filterKey={activeFilter} 
                data={filterData[activeFilter]} 
                onClose={() => setActiveFilter(null)}
              />
            </div>
          )}
        
          <div className={`flex items-center gap-4 text-sm ${activeFilter ? 'justify-end mt-4 pt-2 border-t border-gray-200' : ''}`}>
            <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900">
              Most Relevant <ChevronDown size={14} />
            </button>
            <label className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <input type="checkbox" className="rounded border-gray-300" />
              <span>Next-Day Delivery</span>
            </label>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Women's Eyeglasses ({totalProducts})</h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loading ? (
            <div className="col-span-full text-center py-8 text-gray-500">Loading products...</div>
          ) : (
            products.map((product) => (
              <div key={product.id} className="product-card border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all relative">
                <div className="relative bg-gray-100 p-4">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover mx-auto" />
                  {product.isSale && <div className="sale-badge">Sale</div>}
                  {product.isPremium && <div className="premium-badge">Premium</div>}
                  <div className="heart-icon">❤️</div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-500">{product.colors} colors</span>
                    <span className="delivery-badge">Next-Day Delivery</span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
                  <div className="price-sale mb-3">
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                    <span className={product.originalPrice ? 'sale-price' : 'regular-price'}>
                      ${product.salePrice}
                    </span>
                    <span className="text-xs text-gray-500">including lenses</span>
                  </div>
                  <div className="color-swatches">
                    <div className="color-swatch" style={{ backgroundColor: '#8B4513' }}></div>
                    <div className="color-swatch" style={{ backgroundColor: '#000000' }}></div>
                    <div className="color-swatch" style={{ backgroundColor: '#FFC0CB' }}></div>
                  </div>
                  <div className="action-buttons">
                    <button className="action-btn">Similar Frames</button>
                    <button className="action-btn">Live Try On</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mb-12">
          <button className="bg-blue-600 text-white px-10 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Showing {products.length} of {totalProducts} - View More
          </button>
        </div>
      
      </div>
        <Footer/>
    </div>
  );
};

export default ShopAllGlassesMen;