export default class Expando {
  constructor(
    title,
    subtitle,
    description,
    longDescription = null,
    longDescriptionIcon = 'read_more',
    iconLabel = 'Read Full',
    footer = null
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.longDescription = longDescription;
    this.longDescriptionIcon = longDescriptionIcon;
    this.iconLabel = iconLabel;
    this.footer = footer;
  }
}
