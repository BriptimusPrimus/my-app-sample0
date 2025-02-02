import React from 'react';
import { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import PurchasesContainer from '../components/PurchasesContainer';
import testData from './mockdata.json';

describe('PurchasesContainer tests', () => {
    test('renders table', async () => {
        const fetchDataMock = async () => {
            return {
                ok: true,
                data: testData
            }
        }

        act(() => {
            render(
                <PurchasesContainer
                    pageSize={10}
                    fetchData={fetchDataMock}
                />
            );
        });

        await waitFor(() => {
            expect(screen.getByText('Purchases')).toBeInTheDocument();
        });
    });

    test('empty table', () => {
        const fetchDataMock = async () => {
            return {
                ok: false,
                errMsg: 'Boom!'
            }
        }

        act(() => {
            render(
                <PurchasesContainer
                    pageSize={10}
                    fetchData={fetchDataMock}
                />
            );
        });

        const tableTitle = screen.getByText('No data available.');
        expect(tableTitle).toBeInTheDocument();
    });
});

