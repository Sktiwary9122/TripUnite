import React, { useState } from 'react';
import './Create.css';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
// Adjust the import based on your file structure

function Create() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    // Define state for all form fields
    const [formData, setFormData] = useState({
        Name: '',
        Destination: '',
        Description: '',
        StartDate: '',
        EndDate: '',
        estimatedBudget: '',
        TravellerCount: '',
        localGuide: false,
        MeetUPLocation: '',
        Gender: '',
        MinAge: '',
        MaxAge: '',
        Remarks: ''
    });

    // Handle input change
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    // Handle boolean value for radio buttons (localGuide)
    function handleRadioChange(e) {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value === 'true' // Convert to boolean
        }));
    }

    // Form submit handler
    async function submithandler(e) {
        e.preventDefault();

        // Validate the form data with Zod
        try {
            const response = await axios.post(
                "http://localhost:8000/api/auth/createTrips", 
                {
                    ...formData,
                    estimatedBudget: parseFloat(formData.estimatedBudget),
                    TravellerCount: formData.TravellerCount ? parseInt(formData.TravellerCount) : undefined,
                    MinAge: parseInt(formData.MinAge),
                    MaxAge: parseInt(formData.MaxAge),
                },
                { withCredentials: true } // Ensure cookies are included
            );

            toast.success("TRIP CREATED");
            navigate('/main');
        } catch (error) {
            toast.error("Error creating trip");
            console.error("Error creating trip:", error.errors || error); // Log detailed error from Zod
        }
    }

    return (
        <div className="create-wrapper">
            <div className="create-container">
                {/* navbar */}
                <div className="create-navbar">
                    <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                        <div className="create-logo"></div>
                    </Link>
                    <ul className="create-options">
                        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <ul className="create-home">{t('home')}</ul>
                        </Link>
                        <ul className="create-lang"><LanguageSelector /></ul>
                        <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <ul className="create-about">{t('about')}</ul>
                        </Link>
                        <Link to="/contact" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                            <ul className="create-contact">{t('contact')}</ul>
                        </Link>
                    </ul>
                </div>

                <form className="create-section" onSubmit={submithandler}>
                    {/* left section */}
                    <div className="create-left">
                        <h1>{t('tailored')}</h1>
                    </div>
                    {/* main form */}
                    <div className="create-right">
                        <h2 className="create-head">{t('createtrip')}</h2>
                        <div className="create-name">
                            <div className="create-placeholder">
                                <p>{t('nameoftrip')}</p>
                                <input
                                    type="text"
                                    className="create-tripinput1"
                                    name="Name"
                                    value={formData.Name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="create-input">
                                <p>{t('Destinationfoot')}</p>
                                <input
                                    type="text"
                                    className="create-tripinput1"
                                    name="Destination"
                                    value={formData.Destination}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="create-description">
                            <p>{t('desc')}</p>
                            <input
                                type="text"
                                id="create-description"
                                className="create-tripinput1"
                                name="Description"
                                value={formData.Description}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <p>{t('date')}</p>
                            <div className="create-date">
                                <div className="create-start">
                                    <p>{t('start')}</p>
                                    <input
                                        type="date"
                                        className="create-tripinput1"
                                        name="StartDate"
                                        value={formData.StartDate}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="create-end">
                                    <p>{t('end')}</p>
                                    <input
                                        type="date"
                                        className="create-tripinput1"
                                        name="EndDate"
                                        value={formData.EndDate}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="budget-meet">
                            <div className="create-budget">
                                <p>{t('estimatedbudget')}</p>
                                <input
                                    type="number"
                                    className="create-tripinput1"
                                    name="estimatedBudget"
                                    value={formData.estimatedBudget}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="create-meetup">
                                <p>{t('meetup')}</p>
                                <input
                                    type="text"
                                    className="create-tripinput1"
                                    name="MeetUPLocation"
                                    value={formData.MeetUPLocation}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="create-guide">
                            <p>{t('NeedaLocalGuide')}</p>
                            <div className="create-radio">
                                <div className="create-yes">
                                    <input
                                        type="radio"
                                        id="yes"
                                        name="localGuide"
                                        value="true"
                                        checked={formData.localGuide === true}
                                        onChange={handleRadioChange}
                                    />
                                    <label htmlFor="yes">{t('yes')}</label>
                                </div>
                                <div className="create-no">
                                    <input
                                        type="radio"
                                        id="no"
                                        name="localGuide"
                                        value="false"
                                        checked={formData.localGuide === false}
                                        onChange={handleRadioChange}
                                    />
                                    <label htmlFor="no">{t('no')}</label>
                                </div>
                            </div>
                        </div>

                        <div className="create-members">
                            <p>{t('travellers')}</p>
                            <input
                                type="number"
                                className="create-tripinput1"
                                name="TravellerCount"
                                value={formData.TravellerCount}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <p>{t('preference')}</p>
                            <div className="create-radio">
                                <div className="create-girls">
                                    <input
                                        type="radio"
                                        id="female"
                                        name="Gender"
                                        value="female"
                                        checked={formData.Gender === 'female'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="female">{t('onlyfemale')}</label>
                                </div>
                                <div className="create-boys">
                                    <input
                                        type="radio"
                                        id="male"
                                        name="Gender"
                                        value="male"
                                        checked={formData.Gender === 'male'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="male">{t('onlymale')}</label>
                                </div>
                                <div className="create-no_pref">
                                    <input
                                        type="radio"
                                        id="none"
                                        name="Gender"
                                        value=""
                                        checked={formData.Gender === ''}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="none">{t('nopreference')}</label>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p>{t('agerange')}</p>
                            <div className="create-age">
                                <input
                                    type="number"
                                    className="create-tripinput1"
                                    name="MinAge"
                                    placeholder={t('min')}
                                    value={formData.MinAge}
                                    onChange={handleInputChange}
                                    required
                                />
                             <input
                                    type="number"
                                    className="create-tripinput1"
                                    name="MaxAge"
                                    placeholder={t('max')}
                                    value={formData.MaxAge}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="create-remark">
                            <p>{t('remarks')}</p>
                            <input
                                type="text"
                                className="create-tripinput1"
                                name="Remarks"
                                value={formData.Remarks}
                                onChange={handleInputChange}
                                id="remarkstext"
                            />
                        </div>

                        <button type="submit" className="create-button">
                            {t('create')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Create;
                                   