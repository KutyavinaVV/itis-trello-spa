import React from 'react';
import { render, screen } from '@testing-library/react';
import useTasks from "../../../hooks/useTasks";
import TaskPage from "../TasksFromApi/TasksFromApi";

jest.mock('../../../hooks/useTasks');

describe('TaskPage', () => {
    test('should show Loader on loading', async () => {
        // Arrange
        const mockUseTask = jest.fn(() => ({
            departments: {},
            loading: true,
        }));
        useTasks.mockImplementation(mockUseTask);

        // Act
        render(<TaskPage />);
        const loader = screen.getByTestId('loader');

        // Assert
        expect(loader).toBeInTheDocument();
    });
});