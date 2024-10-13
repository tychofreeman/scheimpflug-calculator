import { describe, it } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App.tsx";

describe('The app', () => {
    it('should have inputs and a button for scheimpflug calculations', () => {
        render(<App />);
        screen.getByRole('textbox', { name: 'Focal Plane'});
        screen.getByRole('textbox', { name: 'Focal Length'});
        screen.getByRole('button', { name: 'Calculate' });
    });
});
