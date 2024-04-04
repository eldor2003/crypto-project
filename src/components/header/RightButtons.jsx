import {Button, ButtonGroup, Stack} from "@mui/material";
import PageStore from "../../store/PageStore";
import {useNavigate} from "react-router-dom";
import euIcon from "../../svg/EU.svg";

const RightButtons = () => {
    const {rightHeaderButtons} = PageStore;
    const navigate = useNavigate();

    return (
      <Stack spacing={2} direction="row">
          <img src={euIcon} />
            {
                rightHeaderButtons.map(({title, variant, color, href}, index) => (
                    <Button
                        href={href}
                        variant={variant}
                        key={index}
                        sx={{
                          backgroundColor: color
                        }}
                    >
                        {title}
                    </Button>
                ))
            }
      </Stack>
    );
};

export default RightButtons;