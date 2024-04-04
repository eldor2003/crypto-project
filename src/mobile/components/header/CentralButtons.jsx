import {Button, Container, Box, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import PageStore from "../../../store/PageStore";

const CentralButtons = () => {
    const navigate = useNavigate();
    const {centralHeaderButtons} = PageStore;
    return (
        <Box mr={6}>
            {
                centralHeaderButtons.map((page, index) => (
                    <Button
                        size="large"
                        key={index}
                        sx={{ color: '#f5f5f5'}}
                    >
                        <Typography>
                            {page}
                        </Typography>
                    </Button>
                ))
            }
        </Box>
    )
};

export default CentralButtons;