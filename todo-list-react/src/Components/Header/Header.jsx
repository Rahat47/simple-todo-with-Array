import React from "react";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import TodoList from "../TodoList/TodoList";

const Heading = () => {
    return (
        <Grid
            textAlign="center"
            style={{ height: "100vh" }}
            verticalAlign="middle"
        >
            <Grid.Column style={{ maxWidth: 450 }}>
                <Header size="huge" color="teal" textAlign="center">
                    Ninja to-do List React
                </Header>
                <Form size="large">
                    <Segment>
                        <Form.Input
                            fluid
                            icon="search"
                            iconPosition="left"
                            placeholder="Search for a To-do"
                            style={{ marginBottom: "30px" }}
                        />
                        <TodoList style={{ padding: "15px" }} />
                        <Form.Input
                            fluid
                            icon="add square"
                            iconPosition="left"
                            placeholder="Add new To-do"
                            style={{ marginTop: "30px" }}
                        />

                        <Button positive fluid size="large">
                            Add
                        </Button>
                    </Segment>
                </Form>
            </Grid.Column>
        </Grid>
    );
};

export default Heading;
