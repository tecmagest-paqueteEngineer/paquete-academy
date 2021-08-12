import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  PlayCircleOutline,
  //Storefront,
  People,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Painel Principal</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Início
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Vendas
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu Rápido</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Cliêntes
              </li>
            </Link>
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <PlayCircleOutline className="sidebarIcon" />
                Vídeos
              </li>
            </Link>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transações
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Relatórios
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificações</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              email
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Suporte
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Admin|Equipa</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Gerentes
            </li>
            <li className="sidebarListItem">
              <People className="sidebarIcon"/>
                Usuários
                </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Análiticos
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Relatórios
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
