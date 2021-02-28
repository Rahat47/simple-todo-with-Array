import React from "react";
import { List } from "semantic-ui-react";
const TodoList = () => {
    return (
        <div>
            <List divided relaxed>
                <List.Item>
                    <List.Icon
                        name="like"
                        size="large"
                        verticalAlign="middle"
                    />
                    <List.Content>
                        <List.Header>Feed the dog</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon
                        name="like"
                        size="large"
                        verticalAlign="middle"
                    />
                    <List.Content>
                        <List.Header>Pet the cat</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon
                        name="like"
                        size="large"
                        verticalAlign="middle"
                    />
                    <List.Content>
                        <List.Header>Love your family and wife.</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        </div>
    );
};

export default TodoList;
