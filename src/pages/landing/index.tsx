import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store";
import NoAuthFullWidthLayout from "../../layouts/no_auth_full_width_layout";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ThreeJSComponent from "./components/cool-circles";
import Part1 from "./components/part_1";
import { FaWhatsapp, FaPhone, FaUser } from "react-icons/fa";

const Landing: React.FC<PropsFromRedux> = ({}: PropsFromRedux) => {
  const [dark, setDark] = useState(false);
  const [feel_of_view, setFeelOfView] = useState<number>(70);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const clientX = event.clientX;
    const clientY = event.clientY;
    // Calculate the feel_of_view based on the client cursor position
    const newFeelOfView = Math.floor(clientX / clientY);
    console.log(newFeelOfView);
    //setFeelOfView(newFeelOfView);
  };

  return (
    <NoAuthFullWidthLayout>
      
    </NoAuthFullWidthLayout>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Landing);
