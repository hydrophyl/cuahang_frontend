import React from 'react';
import Head from 'next/head';
import AppLayout from '../../components/layout/AppLayout';
import TodoList from '../../components/todos/TodoList';

const TodosPage = () => {
  return (
    <div>
      <Head>
        <title>Todos Page</title>
      </Head>
      <AppLayout AppContent={TodoList} />
    </div>
  );
};

export default TodosPage;
