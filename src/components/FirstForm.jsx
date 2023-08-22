import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Col, Container, Input, Label, Row } from "reactstrap";


export default function FirstForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <Container className="border border-black py-2">
            <h1 className="text-center">Student From</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row className="my-2">
                    <Col xs={6} className="my-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <input className="form-control" id='firstName' defaultValue="" {...register("firstName", { required: true })} />
                        {errors.firstName && <p>This field is required</p>}
                    </Col>
                    <Col xs={6} className="my-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <input className="form-control"  {...register("lastName", { required: true })} />
                        {errors.lastName && <p>This field is required</p>}
                    </Col>
                </Row>
                <input type="submit" className="btn border border-1" />
            </form>
        </Container>

    );
}