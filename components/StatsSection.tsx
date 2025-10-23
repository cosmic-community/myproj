export default function StatsSection() {
  const stats = [
    { value: '114', label: 'Сур', emoji: '📖' },
    { value: '6,236', label: 'Аятов', emoji: '✨' },
    { value: '77,439', label: 'Слов', emoji: '📝' },
    { value: '30', label: 'Джузов', emoji: '📚' },
  ];
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div 
          key={stat.label}
          className="bg-white rounded-xl shadow-card p-6 text-center hover:shadow-soft transition-shadow"
        >
          <div className="text-4xl mb-2">{stat.emoji}</div>
          <div className="text-3xl font-bold text-primary-600 mb-1">
            {stat.value}
          </div>
          <div className="text-gray-600 text-sm font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}