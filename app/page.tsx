'use client';

import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      {/* Header */}
      <header className="border-b border-dark-border bg-dark-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🌾</div>
              <div>
                <h1 className="text-2xl font-bold text-accent-green">Smart Crop Guardian</h1>
                <p className="text-sm text-gray-400">Agricultural Decision Support System</p>
              </div>
            </div>
            <button className="button-secondary text-sm">
              Settings
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-64 border-r border-dark-border bg-dark-card">
          <nav className="p-4 space-y-2">
            <NavButton
              label="Dashboard"
              icon="📊"
              active={currentPage === 'dashboard'}
              onClick={() => setCurrentPage('dashboard')}
            />
            <NavButton
              label="Crop Management"
              icon="🌱"
              active={currentPage === 'crops'}
              onClick={() => setCurrentPage('crops')}
            />
            <NavButton
              label="Field Monitoring"
              icon="🚜"
              active={currentPage === 'fields'}
              onClick={() => setCurrentPage('fields')}
            />
            <NavButton
              label="Soil Health"
              icon="🌍"
              active={currentPage === 'soil'}
              onClick={() => setCurrentPage('soil')}
            />
            <NavButton
              label="Weather"
              icon="⛅"
              active={currentPage === 'weather'}
              onClick={() => setCurrentPage('weather')}
            />
            <NavButton
              label="Irrigation"
              icon="💧"
              active={currentPage === 'irrigation'}
              onClick={() => setCurrentPage('irrigation')}
            />
            <NavButton
              label="Equipment"
              icon="⚙️"
              active={currentPage === 'equipment'}
              onClick={() => setCurrentPage('equipment')}
            />
            <NavButton
              label="Reports"
              icon="📋"
              active={currentPage === 'reports'}
              onClick={() => setCurrentPage('reports')}
            />
            <NavButton
              label="Alerts"
              icon="⚠️"
              active={currentPage === 'alerts'}
              onClick={() => setCurrentPage('alerts')}
            />
          </nav>

          <div className="border-t border-dark-border mt-8 pt-4 px-4">
            <h3 className="text-sm font-semibold text-accent-lime mb-3">AI Assistant</h3>
            <button className="w-full button-primary text-sm">
              Ask AI
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {currentPage === 'dashboard' && <DashboardPage />}
          {currentPage === 'crops' && <CropManagementPage />}
          {currentPage === 'fields' && <FieldsPage />}
          {currentPage === 'soil' && <SoilPage />}
          {currentPage === 'weather' && <WeatherPage />}
          {currentPage === 'irrigation' && <IrrigationPage />}
          {currentPage === 'equipment' && <EquipmentPage />}
          {currentPage === 'reports' && <ReportsPage />}
          {currentPage === 'alerts' && <AlertsPage />}
        </main>
      </div>
    </div>
  );
}

function NavButton({
  label,
  icon,
  active,
  onClick,
}: {
  label: string;
  icon: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
        active
          ? 'bg-accent-green text-dark-bg font-semibold'
          : 'hover:bg-dark-border text-dark-text'
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </button>
  );
}

function DashboardPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent-green">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard title="Total Fields" value="8" icon="🌾" />
        <StatsCard title="Crops Monitored" value="5" icon="🌱" />
        <StatsCard title="Soil Moisture" value="61%" icon="💧" />
        <StatsCard title="Temperature" value="24°C" icon="🌡️" />
      </div>
      <div className="card p-6">
        <h3 className="text-xl font-semibold text-accent-green mb-4">Recent Observations</h3>
        <p className="text-gray-400">No recent observations yet.</p>
      </div>
    </div>
  );
}

function CropManagementPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent-green">Crop Management</h2>
      <div className="card p-6">
        <p className="text-gray-400">Crop management features coming soon.</p>
      </div>
    </div>
  );
}

function FieldsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent-green">Field Monitoring</h2>
      <div className="card p-6">
        <p className="text-gray-400">Field monitoring features coming soon.</p>
      </div>
    </div>
  );
}

function SoilPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent-green">Soil Health</h2>
      <div className="card p-6">
        <p className="text-gray-400">Soil health analysis coming soon.</p>
      </div>
    </div>
  );
}

function WeatherPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent-green">Weather</h2>
      <div className="card p-6">
        <p className="text-gray-400">Weather integration coming soon.</p>
      </div>
    </div>
  );
}

function IrrigationPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent-green">Irrigation Management</h2>
      <div className="card p-6">
        <p className="text-gray-400">Irrigation management features coming soon.</p>
      </div>
    </div>
  );
}

function EquipmentPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent-green">Equipment</h2>
      <div className="card p-6">
        <p className="text-gray-400">Equipment management coming soon.</p>
      </div>
    </div>
  );
}

function ReportsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent-green">Reports</h2>
      <div className="card p-6">
        <p className="text-gray-400">Report generation coming soon.</p>
      </div>
    </div>
  );
}

function AlertsPage() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-accent-green">Alerts</h2>
      <div className="card p-6">
        <p className="text-gray-400">No active alerts.</p>
      </div>
    </div>
  );
}

function StatsCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: string;
}) {
  return (
    <div className="card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>
          <p className="text-3xl font-bold text-accent-green mt-2">{value}</p>
        </div>
        <div className="text-4xl">{icon}</div>
      </div>
    </div>
  );
}
