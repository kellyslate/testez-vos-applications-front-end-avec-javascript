/**
* @jest-environment jsdom
*/
// Ici j'importe DOM Test Library

import '@testing-library/jest-dom'
import { getByTestId } from '@testing-library/dom'
import { router } from './index';

describe('Router Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = '<div id="root"></div>';
    });

    it('should display login page when user goes to "/"', async () => {
        document.location = '#/';
        await router();
        expect(document.querySelector('#root').innerHTML).toContain('Veuillez vous connecter');
    });

    it('should display sensor when user goes to "/#/home"', async () => {
        document.location = '/#/home';
        await router();
        expect(document.querySelector('#root').innerHTML).toContain('Vos capteurs');
    });

    it('should display sensor detail when user goes to "/#/facade-details"', async () => {
        document.location = '/#/facade-details';
        await router();
        expect(document.querySelector('#root').innerHTML).toContain('Détails du capteur');
    });

    it('should display add sensor when user goes to "/#/add-sensor"', async () => {
        document.location = '/#/add-sensor';
        await router();
        expect(document.querySelector('#root').innerHTML).toContain('Ajout d\'un nouveau capteur');
    });

    

});



