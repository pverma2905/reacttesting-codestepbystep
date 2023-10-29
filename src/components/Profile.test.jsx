import { render } from "@testing-library/react"
import Profile from "./Profile"

test("snapshot for profile", () => {
    const container = render(<Profile />);
    expect(container).toMatchSnapshot();
})