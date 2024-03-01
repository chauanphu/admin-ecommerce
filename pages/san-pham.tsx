import Header from "@components/Header";
import Table from "@components/Table";

export default function ProductPage() {
  const category_data = [
    ["slug1", "Danh mục 1", ""],
    ["slug2", "Danh mục 2", ""],
    ["slug3", "Danh mục 3", ""],
  ]
  const product_data = [
    ["slug1", "Sản phẩm 1", "sku1", "Mô tả ngắn 1", "Mô tả dài 1", "100000", "slug1", "4.5", "Dự án 1"],
    ["slug2", "Sản phẩm 2", "sku2", "Mô tả ngắn 2", "Mô tả dài 2", "200000", "slug2", "4.5", "Dự án 2"],
    ["slug3", "Sản phẩm 3", "sku3", "Mô tả ngắn 3", "Mô tả dài 3", "300000", "slug3", "4.5", "Dự án 3"],
  ]
  return (
    <>
      <Header>Sản phẩm</Header>
      <Table title="Danh mục" data={category_data} columns={["Slug", "Tên", "Danh mục cha"]} />
      <br />
      <Table title="Sản phẩm" data={product_data} columns={["Slug", "Tên", "SKU", "Mô tả ngắn", "Mô tả dài", "Giá", "Danh mục", "Đánh giá", "Dự án"]} />
    </>
  );
}
