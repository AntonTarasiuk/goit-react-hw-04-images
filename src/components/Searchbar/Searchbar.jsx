import React from "react";
import { Formik } from "formik";
import { SearchForm, Searchbar, SearchFormInput, SearchFormButton, SearchIcon } from "./Searchbar.styled";

export const SearchBar = ({onSubmit}) => {
    const handleSubmitForm = async (values, actions) => {
        await onSubmit(values.searchValue);
        actions.setSubmitting(false);
        actions.resetForm();
    }

    return (
        <Searchbar>
            <Formik 
                initialValues={{searchValue: ''}} 
                onSubmit={handleSubmitForm}
            >
                <SearchForm>
                    <SearchFormButton type="submit">
                        <SearchIcon/>
                    </SearchFormButton>
    
                    <SearchFormInput
                        name="searchValue"
                        // value={this.state.searchValue}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        // onChange={this.handleInputChange}
                    />
                </SearchForm>
            </Formik>
        </Searchbar>
    )
}