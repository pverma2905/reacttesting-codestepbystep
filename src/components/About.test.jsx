import { fireEvent, render, screen } from "@testing-library/react"
import About from "./About"

beforeAll(() => {
    console.log("*********** Before All****************** ")
    console.log("reset")
    console.log("initialize")
})

beforeEach(() => {
    console.log("*********** Before Each****************** ")

})

test('onChange Event testing', () => {
    render(<About />)
    let input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: 'abc' } })
    console.log("1")
    expect(input.value).toBe("abc")
})

test('click event test cases', () => {
    render(<About />)
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    console.log("2")
    expect(screen.getByText("updated data")).toBeInTheDocument();
})



afterAll(() => {
    console.log("*********** After All ****************** ")
    // console.log("reset")
    // console.log("initialize")
})

afterEach(() => {
    console.log("*********** After Each ****************** ")

})



