import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    TeamOutlined,
    SettingOutlined,
    PieChartOutlined,
    LogoutOutlined,
    AppstoreOutlined,
    BarChartOutlined,
    SolutionOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Avatar, Typography, theme, Card } from 'antd';
const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const menuItems = [
    {
        key: 'dashboard',
        icon: <PieChartOutlined />,
        label: 'Dashboard',
    },
    {
        key: 'user-management',
        icon: <TeamOutlined />,
        label: 'User Management',
    },
    {
        key: 'admin-management',
        icon: <SolutionOutlined />,
        label: 'Admin Management',
    },
    {
        key: 'pet-management',
        icon: <AppstoreOutlined />,
        label: 'Pet Management',
    },
    {
        key: 'reports',
        icon: <BarChartOutlined />,
        label: 'Reports & Analytics',
    },
    {
        key: 'settings',
        icon: <SettingOutlined />,
        label: 'Settings',
    },
    {
        key: 'logout',
        icon: <LogoutOutlined />,
        label: 'Logout',
    },
];

const SuperadminLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                style={{ background: '#fff', height: '100vh', minHeight: '100vh', width: 280, fontFamily: 'Poppins, sans-serif' }}
                width={280}
            >
                <div className="flex flex-col items-center" style={{ marginTop: 24, marginBottom: 16, fontFamily: 'Poppins, sans-serif' }}>
                    <Avatar size={40} style={{ backgroundColor: '#7d8ff5', marginBottom: 8, padding: 4 }} icon={<UserOutlined />} />
                    {!collapsed && <Title level={5} style={{ color: '#757FF6', marginBottom: 0, fontFamily: 'Poppins, sans-serif' }}>Superadmin</Title>}
                </div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['dashboard']}
                    items={menuItems}
                    style={{ background: '#fff', borderRight: 0, padding: '0 16px', fontFamily: 'Poppins, sans-serif' }}
                    className="custom-superadmin-menu"
                />
                <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
          .custom-superadmin-menu .ant-menu-item {
            background: #f5f5f7 !important;
            color: #333 !important;
            border-radius: 8px;
            margin: 18px 0 !important;
            padding: 14px 24px !important;
            transition: background 0.2s;
            font-size: 16px;
            font-family: 'Poppins', sans-serif !important;
          }
          .custom-superadmin-menu .ant-menu-item-selected {
            background: #757FF6 !important;
            color: #fff !important;
          }
          .custom-superadmin-menu .ant-menu-item:not(.ant-menu-item-selected):hover {
            background: #e6e8fa !important;
            color: #333 !important;
          }
        `}</style>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                            fontFamily: 'Poppins, sans-serif',
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                        fontFamily: 'Poppins, sans-serif',
                    }}
                >
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                        <Card
                            className="shadow"
                            style={{
                                background: '#e3eafe',
                                borderRadius: 16,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 160,
                            }}
                            bodyStyle={{ padding: 24, width: '100%' }}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <UserOutlined style={{ fontSize: 36, color: '#757FF6', marginBottom: 8 }} />
                                <div className="text-lg font-medium mb-1" style={{ color: '#757FF6' }}>Total Users</div>
                                <div className="text-3xl font-bold" style={{ color: '#222' }}>789</div>
                            </div>
                        </Card>
                        <Card
                            className="shadow"
                            style={{
                                background: '#ffe7e7',
                                borderRadius: 16,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 160,
                            }}
                            bodyStyle={{ padding: 24, width: '100%' }}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <AppstoreOutlined style={{ fontSize: 36, color: '#ff7f7f', marginBottom: 8 }} />
                                <div className="text-lg font-medium mb-1" style={{ color: '#ff7f7f' }}>Total Animals</div>
                                <div className="text-3xl font-bold" style={{ color: '#222' }}>120</div>
                            </div>
                        </Card>
                        <Card
                            className="shadow"
                            style={{
                                background: '#e7fbe7',
                                borderRadius: 16,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: 160,
                            }}
                            bodyStyle={{ padding: 24, width: '100%' }}
                        >
                            <div className="flex flex-col items-center justify-center">
                                <SolutionOutlined style={{ fontSize: 36, color: '#4bb543', marginBottom: 8 }} />
                                <div className="text-lg font-medium mb-1" style={{ color: '#4bb543' }}>Total Adoption</div>
                                <div className="text-3xl font-bold" style={{ color: '#222' }}>4</div>
                            </div>
                        </Card>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default SuperadminLayout;