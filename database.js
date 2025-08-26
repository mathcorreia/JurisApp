// Arquivo: database/database.js
import * as SQLite from 'expo-sqlite';

// Abre ou cria o banco de dados 'jurisapp.db'
const db = SQLite.openDatabase('jurisapp.db');

/**
 * Documentação:
 * Inicializa o banco de dados, criando as tabelas 'advogados' e 'processos'
 * se elas ainda não existirem.
 */
export const initDatabase = () => {
  db.transaction(tx => {
    // Tabela de Advogados (Usuários)
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS advogados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        senha TEXT NOT NULL
      );`
    );
    // Tabela de Processos
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS processos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        advogado_id INTEGER,
        cliente TEXT NOT NULL,
        tipo TEXT NOT NULL,
        numero TEXT NOT NULL,
        status TEXT NOT NULL,
        FOREIGN KEY (advogado_id) REFERENCES advogados (id)
      );`
    );
  });
};

/**
 * Adiciona um novo advogado (usuário) ao banco de dados.
 * Retorna o ID do novo registro.
 */
export const adicionarAdvogado = (nome, email, senha) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO advogados (nome, email, senha) VALUES (?, ?, ?);',
        [nome, email, senha],
        (_, result) => resolve(result.insertId),
        (_, error) => reject(error)
      );
    });
  });
};

/**
 * Busca um advogado por email e senha para autenticação.
 * Retorna o objeto do advogado se encontrado, senão, retorna null.
 */
export const buscarAdvogado = (email, senha) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM advogados WHERE email = ? AND senha = ?;',
        [email, senha],
        (_, { rows }) => {
          if (rows.length > 0) {
            resolve(rows.item(0));
          } else {
            resolve(null);
          }
        },
        (_, error) => reject(error)
      );
    });
  });
};

/**
 * Busca todos os processos associados a um advogado específico pelo ID dele.
 */
export const buscarProcessosPorAdvogado = (advogado_id) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM processos WHERE advogado_id = ?;',
                [advogado_id],
                (_, { rows }) => resolve(rows._array),
                (_, error) => reject(error)
            );
        });
    });
};