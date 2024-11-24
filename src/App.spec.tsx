import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import App from "./App.tsx";

describe('The app', () => {
    it('should have inputs and a button for scheimpflug calculations', async () => {
        render(<App />);
        const focalPlaneInput = screen.getByRole('textbox', { name: 'Focal Plane'});
        const focalLengthInput = screen.getByRole('textbox', { name: 'Focal Length'});
        const angleOfFocusOutput = screen.getByRole('status', { name: 'Angle of Focus'});

        expect(angleOfFocusOutput.innerText).toBe('');

        await userEvent.type(focalPlaneInput, '12')
        expect(angleOfFocusOutput.innerText).toBe('');

        console.log(`Going to type into focal length input`)
        await userEvent.type(focalLengthInput, '34');

        expect(angleOfFocusOutput.innerText).not.toBe('');
    });
});
