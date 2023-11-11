import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Step1 from '../Step1/step1';
import Step2 from '../Step2/step2';
import Step4 from '../Step4/step4';
import Step3 from '../Step3/step3';
import theme from '../../../themes/theme';
import { AutoAwesome, ChevronLeft, MusicNote, SportsEsports } from '@mui/icons-material';


import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import SettingsIcon from '@mui/icons-material/Settings';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { StepIcon } from '@mui/material';



const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    display: 'none',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
      
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 10,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));


const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  zIndex: 1,
  color: theme.palette.darkgrey.darkgrey400,
  width: 50,
  height: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    color: theme.palette.primary.main,
      
  }),
  ...(ownerState.completed && {
    color: theme.palette.primary.main,

  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <SettingsIcon />,
    2: <MusicNote />,
    3: <SportsEsports />,
    4: <AutoAwesome />,
  };

  return (
    <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}


ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};


const steps = [
  {label:'Priorty Code'},
  {label:'Creator Type'},
  {label:'Basics'},
  {label:'Collabs'},
];


export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const completedSteps = []; // Define an array of completed step indices


  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />} >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {
          };
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel StepIconComponent={ColorlibStepIcon} {...labelProps}
                sx={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingBottom: 1,  
                  '.MuiStepLabel-iconContainer': {
                    p: '0',
                    m:'0',
                  },
                  '& .MuiStepLabel-labelContainer': {
                    
                  },
                  '& .MuiStepLabel-label': {
                    '&:after': {
                      content: '""',
                      display: 'block',
                      height: '8px',
                      bgcolor: theme.palette.primary.light,
                      width: '90%',
                      position: 'absolute',
                      bottom: '-12px',
                      left: '0',
                      borderRadius: '16px',
                      m:'0 5px'
                    },
                    '&.Mui-active': { // Change styles when the step is active
                      color: theme.palette.primary.main, // Change the active color here
                      '&:after': {
                        bgcolor: theme.palette.primary.main,
                      }
                    },
                    '&.Mui-completed': { // Change styles when the step is completed
                      color: theme.palette.primary.main, // Change the completed color here
                      '&:after': {
                        bgcolor: theme.palette.primary.main,
                      }
                    },
                    
                    '&.MuiStepLabel-alternativeLabel': {
                      marginTop: '-3px',
                    },
                  },
                  
                }}
              >
                {label.label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          
        </React.Fragment>
      ) : (
        <React.Fragment>
                          
            {activeStep === 0 && <Step1 onButtonClick={handleNext} />}
            {activeStep === 1 && <Step2 onButtonClick={handleNext} />}
            {activeStep === 2 && <Step3 onButtonClick={handleNext} />}
            {activeStep === 3 && <Step4 onButtonClick={handleNext} />}
            
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                startIcon={<ChevronLeft />}
                disabled={activeStep === 0}
                onClick={handleBack}
                
                sx={{
                  mr: 1, position: 'absolute',
                  top: 10, display: activeStep === 0 ? 'none' : 'flex',
                  textTransform: 'capitalize',
                  color: theme.palette.darkgrey.darkgrey500
                }}
            >
              Back
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}