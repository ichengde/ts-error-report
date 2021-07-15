export const clean = (data) => {
  const ans = [["模块", "文件名", "错误类型", "错误位置"].join("\t")]
    .concat(
      data.split("\n").map((i) => {
        let col = i.split("\t");

        const pos = col[0].indexOf("(");
        const pointPos = col[0].indexOf(".");
        const filename = col[0].slice(0, pointPos);
        const filepos = col[0].slice(pos);
        const module = filename.split("/").slice(0, 2).join("/");
        const error = col[1];
        return [module, filename, error, filepos].join("\t");
      })
    )
    .join("\n");

  return ans;
};
