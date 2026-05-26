function App() {
  return (
    <div>
      <h1>フォーム管理</h1>

      <form>
        <label>名前</label>
        <input type="text" />

        <label>メールアドレス</label>
        <input type="email" />

        <label>パスワード</label>
        <input type="password" />

        <label>
          <input type="checkbox" />
          利用規約に同意する
        </label>

        <button type="submit">
          送信
        </button>
      </form>
    </div>
  );
}

export default App