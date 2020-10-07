import React, { useState } from "react";
import FlexRow from "./components/FlexRow";
import FlexColumn from "./components/FlexColumn";
import RadioButton from "./components/RadioButton";
import Container from "./components/Container";
import Button from "./components/Button";
import data from "./data";
import "./App.css";

function App() {
  const [radioValue, onChangeValue] = useState({
    0: { id: null, value: "" },
  });

  const disableItem = (item, i) => {
    return (
      radioValue[i] === undefined ||
      data.rules[radioValue[i - 1]?.id]?.includes(parseInt(item.id))
    );
  };

  const handleChange = (i, e) => {
    const { id, value } = e.target;
    onChangeValue({
      ...radioValue,
      [i.toString()]: { id, value },
      [(i + 1).toString()]: { id: null, value: "" },
    });
  };

  const handleSubmit = () => {
    alert("SUBMIT");
  };

  return (
    <Container>
      <FlexColumn justifyContentCenter alignItemsCenter>
        {data &&
          data.menus.map((row, i) => {
            return (
              <FlexRow id={i.toString()} justifyContentCenter>
                {row &&
                  row.map((item) => (
                    <RadioButton
                      id={item.id}
                      name={item.id}
                      disabled={disableItem(item, i.toString())}
                      checked={
                        radioValue[i.toString()]?.id === item.id &&
                        radioValue[i.toString()]?.value === item.value
                      }
                      label={item.value}
                      value={item.value}
                      onChange={(e) => handleChange(i, e)}
                    />
                  ))}
              </FlexRow>
            );
          })}
        <Button
          disabled={Object.keys(radioValue).length < 3 || !radioValue["2"]?.id}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </FlexColumn>
    </Container>
  );
}

export default App;
