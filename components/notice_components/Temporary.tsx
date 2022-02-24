

// 박스의 높낮이 등을 지정
const ITEM_HEIGHT = 48;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5,
      width: 250,
    },
  },
};

// 리스트 생성
const names = [
  "All",
  "General Announcement",
  "Special Announcement",
  "Event Announcement",
  "Caution",
];

//스타일 함수 생성
function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
}


// 내부 생성 
export default function NotificationSelect() {
    const theme = useTheme();
}