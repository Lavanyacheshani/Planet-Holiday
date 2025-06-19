import React from 'react';
import { Navigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { state } = useApp();

  if (!state.isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}