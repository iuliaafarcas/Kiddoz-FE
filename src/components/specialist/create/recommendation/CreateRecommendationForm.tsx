import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { TypeEnum } from "../../../../interfaces/TypeEnum";
import { AgeUnitEnum } from "../../../../interfaces/AgeUnitEnum";
import Benefit, { Benefits } from "../../../../interfaces/Benefits";
import RecommendationService from "../../../../api/recommendation/RecommendationService";
import { SelectChangeEvent } from "@mui/material/Select";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React from "react";
import ParentService from "../../../../api/parent/ParentService";
import SpecialistService from "../../../../api/specialist/SpecialistService";

function fetchBenefits(): Promise<Benefit[]> {
  return RecommendationService.getBenefits().then((response) => {
    return response.data;
  });
}

const CreateRecommendationForm = () => {
  const [type, setType] = useState("");
  const [benefitMap, setBenefitMap] = useState(new Map<Benefit, number>());
  const [fromAge, setFromAge] = useState(0);
  const [fromUnitAge, setFromUnitAge] = useState("");
  const [toAge, setToAge] = useState(0);
  const [toUnitAge, setToUnitAge] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [specialistId, setSpecialistId] = useState(0);

  const getSpecialistId = () => {
    try {
      const logg = ParentService.getUserData();
      logg.then((response) => {
        if (response.data.role === "Specialist")
          setSpecialistId(response.data.id);
        else setErrorMessage("Something went wrong!");
      });
    } catch (e) {
      console.log(e);
    }
  };

  const filterIndexedEnumsKeys = (obj: any) => {
    return Object.keys(obj).filter((currentKey) => isNaN(parseInt(currentKey)));
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const typesOptions = useMemo(() => {
    return filterIndexedEnumsKeys(TypeEnum).map((typeName: string) => {
      return (
        <MenuItem key={`type-option-${typeName}`} value={typeName}>
          {typeName}
        </MenuItem>
      );
    });
  }, []);

  const ageOptions = useMemo(() => {
    return filterIndexedEnumsKeys(AgeUnitEnum).map((typeName: string) => {
      return (
        <MenuItem key={`type-option-${typeName}`} value={typeName}>
          {typeName}
        </MenuItem>
      );
    });
  }, []);

  const handleType = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const validateBenefits = () => {
    var a = Array.from(benefitMap).reduce(
      (sum, element) => sum + element[1],
      0
    );
    console.log("a");
    return a;
  };

  const takeChoosenRecommendations = () => {
    const selectedRecommendations: any = [];

    Array.from(benefitMap).forEach(([id, value]) => {
      if (value === 1) {
        selectedRecommendations.push(id.id);
      }
    });

    return selectedRecommendations;
  };

  const handleFromUnitAge = (event: SelectChangeEvent) => {
    setFromUnitAge(event.target.value as string);
  };
  const handleToUnitAge = (event: SelectChangeEvent) => {
    setToUnitAge(event.target.value as string);
  };

  const validateEmptyFields = () => {
    if (title === "") {
      setErrorMessage("Title must not be empty");
      return;
    }
    if (type === "") {
      setErrorMessage("You should select a type for the recommendation");
      return;
    }
    if (fromUnitAge === "" || toUnitAge === "") {
      setErrorMessage(
        "You should select both age units for the recommendation"
      );
      return;
    }
    if (validateAge() === false) {
      setErrorMessage("From Age should be less than To Age");
      return;
    }
    if (
      (fromUnitAge === "Days" && fromAge > 29) ||
      (toUnitAge === "Days" && toAge > 29)
    ) {
      setErrorMessage(
        "Number of days can not be larger than 29. Please change the unit to Month"
      );
      return;
    }
    if (
      (fromUnitAge === "Months" && fromAge > 11) ||
      (toUnitAge === "Months" && toAge > 11)
    ) {
      setErrorMessage(
        "Number of months can not be larger than 11. Please change the unit to Years"
      );
      return;
    }

    if (description === "") {
      setErrorMessage("Description must not be empty");
      return;
    }
    if (image === "") {
      setErrorMessage("Image adress must not be empty");
      return;
    }
    if (validatePhotoAddress(image) === false) {
      setErrorMessage("Invalid image adress");
      return;
    }
    if (validateBenefits() === 0) {
      setErrorMessage("You should select some benefits for the recommendation");
      return;
    }
    setErrorMessage("");
  };

  const validatePhotoAddress = (address: string): boolean => {
    const regex =
      /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
    return regex.test(address);
  };

  const convertToDays = (age: number, unit: string): number => {
    const daysPerUnit: { [key: string]: number } = {
      Days: 1,
      Months: 30,
      Years: 365,
    };

    return age * daysPerUnit[unit];
  };

  const validateAge = () => {
    if (fromAge <= 0 || toAge <= 0) return false;
    const fromAgeInDays = convertToDays(fromAge, fromUnitAge);
    const toAgeInDays = convertToDays(toAge, toUnitAge);
    if (fromAgeInDays >= toAgeInDays) return false;
  };

  const handleBenefitClick = (benefit: Benefit) => {
    const updatedMap = new Map(benefitMap);
    const currentValue = updatedMap.get(benefit);
    updatedMap.set(benefit, currentValue === 0 ? 1 : 0);
    setBenefitMap(updatedMap);
  };

  useEffect(() => {
    const initializeMap = (benefits: Benefit[] | undefined) => {
      const map: Map<Benefit, number> = new Map();
      if (Array.isArray(benefits)) {
        benefits.forEach((benefit) => {
          map.set(benefit, 0);
        });
      }
      setBenefitMap(map);
    };

    const fetchDataAsync = async () => {
      try {
        const benefits = await fetchBenefits();
        initializeMap(benefits);
      } catch (e) {
        console.log(e);
      }
    };

    fetchDataAsync();
    getSpecialistId();
  }, []);

  useEffect(() => {
    validateEmptyFields();
  }, [title, description, type, fromUnitAge, toUnitAge, image, benefitMap]);

  const fetchRecommendation = async (
    title: string,
    description: string,
    fromAge: number,
    fromUnitAge: string,
    toAge: number,
    toUnitAge: string,
    type: string,
    image: string,
    specialistId: number,
    benefits: Array<number>[]
  ) => {
    try {
      const response = await SpecialistService.addRecommendation(
        title,
        description,
        fromAge,
        fromUnitAge,
        toAge,
        toUnitAge,
        type,
        image,
        specialistId,
        benefits
      );

      window.location.href = "/recommendations";
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
  };

  const createRecommendation = () => {
    const benefits = takeChoosenRecommendations();
    fetchRecommendation(
      title,
      description,
      fromAge,
      fromUnitAge,
      toAge,
      toUnitAge,
      type,
      image,
      specialistId,
      benefits
    );
    // console.log(
    //   title,
    //   type,
    //   fromAge,
    //   fromUnitAge,
    //   toAge,
    //   toUnitAge,
    //   description,
    //   image,
    //   list_,
    //   specialistId
    // );
  };

  const displayDialog = () => {
    if (errorMessage !== "") {
      setIsOpened(true);
      return;
    }
    setOpenDialog(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    setIsOpened(false);
  };
  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Grid
      sx={{
        width: "900px",
        marginTop: "120px",
        marginLeft: "300px",
        backgroundColor: "white",
      }}
    >
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogContent>
          Are you sure you want to create this recommendation?
        </DialogContent>
        <DialogActions>
          <Button
            onClick={createRecommendation}
            sx={{
              textTransform: "none",
              backgroundColor: "#2A9D8F",
              color: "white",
              ":hover": {
                bgcolor: "#264653",
              },
            }}
          >
            Yes
          </Button>
          <Button
            onClick={handleDialogClose}
            sx={{
              textTransform: "none",
              backgroundColor: "#E76F51",
              color: "white",
              ":hover": {
                bgcolor: "#264653",
              },
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "40px",
          marginLeft: "70px",
          marginRight: "70px",
        }}
      >
        <Snackbar open={isOpened} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
        <Typography
          sx={{ fontSize: "30px", marginTop: "50px", color: "#264653 " }}
        >
          <b>Recommend something interesting and help others!</b>
        </Typography>

        <InputLabel sx={{ marginTop: "30px" }}> Title </InputLabel>
        <TextField
          value={title}
          placeholder="Insert a title..."
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></TextField>

        <FormControl sx={{ marginTop: "30px" }}>
          <InputLabel> Type </InputLabel>
          <Select value={type} onChange={handleType} label="Type">
            {typesOptions}
          </Select>
        </FormControl>

        <InputLabel sx={{ marginTop: "40px" }}>Recommended age</InputLabel>

        <Grid sx={{ display: "flex", flexDirection: "row", marginTop: "20px" }}>
          <InputLabel sx={{ marginRight: "20px", marginTop: "15px" }}>
            From{" "}
          </InputLabel>
          <TextField
            type="number"
            sx={{ width: "100px", marginRight: "20px" }}
            placeholder="From"
            value={fromAge}
            onChange={(event) => {
              setFromAge(parseInt(event.target.value));
            }}
          ></TextField>
          <FormControl>
            <InputLabel> Age unit</InputLabel>
            <Select
              value={fromUnitAge}
              placeholder="From"
              label="FromUnitAge"
              onChange={handleFromUnitAge}
              sx={{ width: "110px" }}
            >
              {ageOptions}
            </Select>
          </FormControl>

          <InputLabel
            sx={{ marginTop: "15px", marginLeft: "100px", marginRight: "20px" }}
          >
            To{" "}
          </InputLabel>
          <TextField
            type="number"
            placeholder="To"
            value={toAge}
            onChange={(event) => {
              setToAge(parseInt(event.target.value));
            }}
            sx={{ width: "100px", marginRight: "20px" }}
          ></TextField>

          <FormControl>
            <InputLabel> Age unit</InputLabel>

            <Select
              value={toUnitAge}
              label="toUnitAge"
              sx={{ width: "110px" }}
              onChange={handleToUnitAge}
            >
              {ageOptions}
            </Select>
          </FormControl>
        </Grid>

        <InputLabel sx={{ marginTop: "40px" }}> Description </InputLabel>
        <TextField
          sx={{ marginTop: "20px" }}
          multiline
          rows={10}
          placeholder="Description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <InputLabel sx={{ marginTop: "40px", marginBottom: "20px" }}>
          Image
        </InputLabel>
        <TextField
          sx={{ width: "750px", marginRight: "20px" }}
          placeholder="Image address"
          value={image}
          onChange={(event) => {
            setImage(event.target.value);
          }}
        ></TextField>
        <InputLabel sx={{ marginTop: "20px", marginBottom: "20px" }}>
          Benefits
        </InputLabel>

        <Grid
          sx={{
            height: "250px",
            overflowY: "scroll",

            marginTop: "10px",
          }}
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
        >
          {Array.from(benefitMap).map(([element, value]) => {
            return (
              <Grid
                item
                key={element.id}
                onClick={() => handleBenefitClick(element)}
                sx={{
                  fontSize: "14px",
                  color: value === 0 ? "#2A9D8F" : "white",
                  height: "25px",
                  marginRight: "10px",
                  marginBottom: "5px",
                  minWidth: "70px",
                  background: value === 1 ? "#2A9D8F" : "white",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "20px",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "2px solid #2A9D8F",
                  cursor: "pointer",
                }}
              >
                {element.name}
              </Grid>
            );
          })}
        </Grid>

        <Grid
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "40px",
            marginBottom: "30px",
          }}
        >
          <Button
            variant="contained"
            onClick={displayDialog}
            sx={{ textTransform: "none", color: "white" }}
          >
            Create recommendation
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default CreateRecommendationForm;
