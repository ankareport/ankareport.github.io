---
sidebar_position: 2
---

# Layout

```ts title="ILayout"
export interface ILayout extends IStyle {
  width: number;
  headerSection: ISection;
  contentSection: ISection;
  footerSection: ISection;
}
```

```ts title="ISection"
export interface ISection extends IStyle {
  height: number;
  binding: string;
  items?: IReportItem[];
  sections?: ISection[];
}
```

```ts title="IBaseReportItem"
export interface IBaseReportItem extends IStyle {
  x: number;
  y: number;
  width: number;
  height: number;
  name: string;
}
```

```ts title="ITextReportItem"
export interface ITextReportItem extends IBaseReportItem {
  type: "text";
  text: string;
  binding?: string;
}
```

```ts title="IImageReportItem"
export interface IImageReportItem extends IBaseReportItem {
  type: "image";
  source: string;
  binding?: string;
}
```

```ts title="IBarcodeReportItem"
export interface IBarcodeReportItem extends IBaseReportItem {
  type: "barcode";
  value: string;
  binding?: string;
  format?: string;
  barWidth: 1 | 2 | 3 | 4;
}
```

```ts title="IReportItem"
export type IReportItem = ITextReportItem | IImageReportItem | IBarcodeReportItem;
```

```ts title="IStyle"
export interface IStyle {
  color?: string;
  backgroundColor?: string;
  textAlign?: TextAlign;
  borderWidth?: number;
  borderStyle?: string;
  borderColor?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
}
```
