/* Отвечает за показ лайков и подписок на товары 
на основной странице в "Drawer" */

const addetItemsUser = (
  nameLength: number,
  sliceOption: number,
  sectionItem: string
) => {
  const items: any = { ...localStorage };
  const likedItems = Object.keys(items).filter((key) => {
    return key.slice(0, nameLength) === sectionItem;
  });
  const normalStructuredDataItems = likedItems.map((key) =>
    key.slice(sliceOption)
  );
  return normalStructuredDataItems.map((item, index) => (
    <div key={index}>{item}</div>
  ));
};
export default addetItemsUser;
