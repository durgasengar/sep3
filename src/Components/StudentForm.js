//src / Components / StudentForm.js
import React from "react";
import * as Yup from "yup";
import {
	Formik, Form,
	Field, ErrorMessage
} from "formik";
import {
	FormGroup,
	FormControl, Button
} from "react-bootstrap";

const StudentForm = (props) => {
	const validationSchema =
		Yup.object().shape({
			name: Yup.string().required("Required"),
			email: Yup.string()
				.email(
`You have enter an invalid email address`
				)
				.required("Required"),
			rollno: Yup.number()
				.positive("Invalid roll number")
				.integer("Invalid roll number")
				.required("Required"),
		});
	console.log(props);
	return (
		<div className="form-wrapper">
             <center>
             <h1>Create Student</h1>
			<Formik {...props}
				validationSchema={validationSchema}>
				<Form>
					<FormGroup>
                   
						<Field name="name" type="text" placeholder="Enter Name"
							className="form-control" />
						<ErrorMessage
							name="name"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<Field name="email" placeholder="Enter Email"
							type="text"
							className="form-control" />
						<ErrorMessage
							name="email"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<FormGroup>
						<Field name="rollno"  placeholder="Enter RollNo"
							type="number"
							className="form-control" />
						<ErrorMessage
							name="rollno"
							className="d-block 
								invalid-feedback"
							component="span"
						/>
					</FormGroup>
					<Button variant="danger" size="lg"
						block="block" type="submit">
						{props.children}
					</Button>
				</Form>
			</Formik>
            </center>
		</div>
	);
};

export default StudentForm;
