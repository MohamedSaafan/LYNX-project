import React, { useState } from 'react';
import { Box, Button, Chip, Container, TextField, TextareaAutosize, Typography } from '@mui/material';
import theme from '../../../../themes/theme';
import styles from './style.module.css';
import Basics from './components/basics';
import Roles from './components/roles';
import Contact from './components/contact';
import Footer from '../../../Footer/footer';
import { useNavigate } from 'react-router-dom';

const ProjectForm = () => {
    const [ title, setTitle ] = useState('');
    const [ subheading, setSubheading ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ country, setCountry ] = useState('');
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [selectedSpecialty, setSelectedSpecialty] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [emailAddress, setEmailAddress] = useState(null);

    const navigate = useNavigate();

    const basicProps = {
        title: title,
        setTitle: setTitle,
        subheading: subheading,
        setSubheading: setSubheading,
        description: description,
        setDescription: setDescription,
        country: country,
        setCountry: setCountry,
    }
    const rolesProps = {
        selectedSkill: selectedSkill,
        setSelectedSkill: setSelectedSkill,
        selectedSpecialty: selectedSpecialty,
        setSelectedSpecialty: setSelectedSpecialty,
        selectedCategory: selectedCategory,
        setSelectedCategory: setSelectedCategory,
    }
    const contactProps = {
        emailAddress: emailAddress,
        setEmailAddress: setEmailAddress,
    }

    const handleNavigate = () => {
        navigate('/job-submission')
    }

    return (
        <Box component="form" className={styles.projectForm}>
            <Basics {...basicProps} />
            <Roles {...rolesProps} />
            <Contact {...contactProps} />
            <Box className={styles.button}>
                <Button variant='contained' 
                    onClick={handleNavigate}
                    sx={{
                        textTransform: 'capitalize',
                        fontSize: '16px',
                        fontWeight: '400',
                        padding: '10px 24px',
                    }}
                    fullWidth
                >submit</Button>
            </Box>
        </Box>
    );
}

export default ProjectForm;