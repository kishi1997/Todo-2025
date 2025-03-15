export const formatDate = (date: Date) => {
  // 取得した createdAt を Date オブジェクトとして変換
  const createdAtDate = new Date(date);
  // 文字列に変換 (例: YYYY-MM-DD HH:mm:ss)
  const formattedDate = `${createdAtDate.getFullYear()}-${createdAtDate.getMonth() + 1}-${createdAtDate.getDate()}`;
  return formattedDate;
};
