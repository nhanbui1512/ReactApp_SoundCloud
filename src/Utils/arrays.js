export function changePosition(mang, viTriA, viTriB) {
  // Kiểm tra nếu vị trí không hợp lệ
  if (viTriA < 0 || viTriA >= mang.length || viTriB < 0 || viTriB >= mang.length) {
    return;
  }
  // Lấy phần tử ở vị trí a
  var phanTu = mang[viTriA];

  // Xóa phần tử tại vị trí a
  mang.splice(viTriA, 1);

  // Chèn phần tử vào vị trí b
  mang.splice(viTriB, 0, phanTu);
}

export function deepFindComment(comments, targetId) {
  for (const comment of comments) {
    if (comment.id === targetId) {
      return comment;
    }
    if (comment.Replies && comment.Replies.length > 0) {
      const found = deepFindComment(comment.Replies, targetId);
      if (found) {
        return found;
      }
    }
  }
  return null;
}
