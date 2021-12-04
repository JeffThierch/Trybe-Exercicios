import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testa se a mensagem "Email Valido/Invalido" nao esta aparecendo ao renderizar o componente', () => {
  render(<ValidEmail email='' />)
  const isValid = screen.queryByTestId('id-is-email-valid');
  expect(isValid).not.toBeInTheDocument();
})

test('Testando se o componente tem o texto verde se estiver correto', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.queryByTestId('id-is-email-valid');
  expect(isValid).toHaveStyle('color: green');
});

test('Testando se o componente tem o texto vermelho se estiver incorreto.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.queryByTestId('id-is-email-valid');
  expect(isValid).toHaveStyle('color: red');
});