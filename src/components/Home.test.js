import { render, screen } from "@testing-library/react";
import Home from "./Home"

test("first react test", () => {
    render(<Home />)
    const text = screen.getByText(/First React Test Case/i);
    const title = screen.getByTitle("AI generated img")
    const text1 = screen.getByText("Pranav Verma")
    const alt = screen.getByAltText("beer")
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(text1).toBeInTheDocument();
    expect(alt).toBeInTheDocument();
})

test("testing input box", () => {
    render(<Home />)
    let checkInput = screen.getByRole("textbox");
    let checkInputPlaceholder = screen.getByPlaceholderText("Enter User Name")
    expect(checkInput).toBeInTheDocument();
    expect(checkInputPlaceholder).toBeInTheDocument();
    expect(checkInput).toHaveAttribute("name", "username")
    expect(checkInput).toHaveAttribute("id", "userId")
    expect(checkInput).toHaveAttribute("type", "text")
    expect(checkInput).toHaveAttribute("value", "pranav verma")

})

describe("Ui test case group", () => {
    test("ui case 1", () => {
        render(<Home />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name", "username")
    })
    test("ui case 2", () => {
        render(<Home />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name", "username")
    })
    test("ui case 3", () => {
        render(<Home />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name", "username")
    })
})

describe("Api test case group", () => {
    test("api case 1", () => {
        render(<Home />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name", "username")
    })
    test("api case 2", () => {
        render(<Home />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name", "username")
    })
    test("api case 3", () => {
        render(<Home />)
        let checkInput = screen.getByRole("textbox");
        expect(checkInput).toHaveAttribute("name", "username")
    })

    describe.only("inner describe test group", () => {
        test("api case 3", () => {
            render(<Home />)
            let checkInput = screen.getByRole("textbox");
            expect(checkInput).toHaveAttribute("name", "username")
        })
    })
})


