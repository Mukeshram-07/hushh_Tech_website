import { render, screen, fireEvent } from "@testing-library/react";
import HushhTechFaqSheet from "../HushhTechFaqSheet";

describe("HushhTechFaqSheet accessibility", () => {
  test("links trigger and panel with aria attributes", () => {
    render(
      <HushhTechFaqSheet
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    const trigger = screen.getByRole("button", {
      name: /what is kyc verification/i,
    });

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute(
      "aria-controls"
    );

    const panelId =
      trigger.getAttribute("aria-controls");

    const panel =
      document.getElementById(panelId!);

    expect(panel).toHaveAttribute(
      "role",
      "region"
    );

    expect(panel).toHaveAttribute(
      "aria-labelledby",
      trigger.id
    );
  });

  test("accordion expands and collapses", () => {
    render(
      <HushhTechFaqSheet
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    const trigger = screen.getByRole("button", {
      name: /what is kyc verification/i,
    });

    expect(trigger).toHaveAttribute(
      "aria-expanded",
      "false"
    );

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute(
      "aria-expanded",
      "false"
    );
  });
});