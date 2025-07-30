import React, { useState, useEffect } from 'react';
import { X, Plus, Edit2, Trash2, Save, User, FileText, Star, Briefcase } from 'lucide-react';

interface DashboardProps {
  onClose: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [editingTestimonial, setEditingTestimonial] = useState(null);

  const tabs = [
    { id: 'projects', name: 'Projects', icon: <Briefcase size={18} /> },
    { id: 'testimonials', name: 'Testimonials', icon: <Star size={18} /> },
  ];

  useEffect(() => {
    // Load data from localStorage
    const savedProjects = localStorage.getItem('portfolioProjects');
    const savedTestimonials = localStorage.getItem('portfolioTestimonials');
    
    if (savedProjects) setProjects(JSON.parse(savedProjects));
    if (savedTestimonials) setTestimonials(JSON.parse(savedTestimonials));
  }, []);

  const saveProjects = (updatedProjects: any[]) => {
    setProjects(updatedProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
  };

  const saveTestimonials = (updatedTestimonials: any[]) => {
    setTestimonials(updatedTestimonials);
    localStorage.setItem('portfolioTestimonials', JSON.stringify(updatedTestimonials));
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'New Project',
      category: 'web-development',
      description: 'Project description...',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: '',
      githubUrl: '',
      featured: false
    };
    const updatedProjects = [...projects, newProject];
    saveProjects(updatedProjects);
    setEditingProject(newProject);
  };

  const deleteProject = (id: number) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    saveProjects(updatedProjects);
  };

  const updateProject = (updatedProject: any) => {
    const updatedProjects = projects.map(p => 
      p.id === updatedProject.id ? updatedProject : p
    );
    saveProjects(updatedProjects);
    setEditingProject(null);
  };

  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      name: 'New Client',
      position: 'Position',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      text: 'Testimonial text...',
      project: 'Project Name'
    };
    const updatedTestimonials = [...testimonials, newTestimonial];
    saveTestimonials(updatedTestimonials);
    setEditingTestimonial(newTestimonial);
  };

  const deleteTestimonial = (id: number) => {
    const updatedTestimonials = testimonials.filter(t => t.id !== id);
    saveTestimonials(updatedTestimonials);
  };

  const updateTestimonial = (updatedTestimonial: any) => {
    const updatedTestimonials = testimonials.map(t => 
      t.id === updatedTestimonial.id ? updatedTestimonial : t
    );
    saveTestimonials(updatedTestimonials);
    setEditingTestimonial(null);
  };

  return (
    <div className="fixed inset-0 bg-gray-900 z-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">
            Portfolio <span className="text-cyan-400">Dashboard</span>
          </h1>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.icon}
              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Tab */}
        {activeTab === 'projects' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Manage Projects</h2>
              <button
                onClick={addProject}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus size={18} />
                <span>Add Project</span>
              </button>
            </div>

            <div className="grid gap-6">
              {projects.map((project) => (
                <div key={project.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-cyan-400">{project.category}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingProject(project)}
                        className="p-2 text-blue-400 hover:bg-blue-500/20 rounded"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => deleteProject(project.id)}
                        className="p-2 text-red-400 hover:bg-red-500/20 rounded"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-700 text-cyan-400 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Manage Testimonials</h2>
              <button
                onClick={addTestimonial}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus size={18} />
                <span>Add Testimonial</span>
              </button>
            </div>

            <div className="grid gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                        <p className="text-cyan-400">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingTestimonial(testimonial)}
                        className="p-2 text-blue-400 hover:bg-blue-500/20 rounded"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => deleteTestimonial(testimonial.id)}
                        className="p-2 text-red-400 hover:bg-red-500/20 rounded"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-2">"{testimonial.text}"</p>
                  <p className="text-sm text-cyan-400">Project: {testimonial.project}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Edit Project Modal */}
        {editingProject && (
          <ProjectEditModal
            project={editingProject}
            onSave={updateProject}
            onClose={() => setEditingProject(null)}
          />
        )}

        {/* Edit Testimonial Modal */}
        {editingTestimonial && (
          <TestimonialEditModal
            testimonial={editingTestimonial}
            onSave={updateTestimonial}
            onClose={() => setEditingTestimonial(null)}
          />
        )}
      </div>
    </div>
  );
};

// Project Edit Modal Component
const ProjectEditModal = ({ project, onSave, onClose }) => {
  const [formData, setFormData] = useState(project);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      technologies: formData.technologies.split(',').map(t => t.trim())
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60 p-4">
      <div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-white mb-4">Edit Project</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
            >
              <option value="web-development">Website Design & Dev</option>
              <option value="app-development">App Design & Dev</option>
              <option value="ui-design">Logo Design</option>
              <option value="social-media">Instagram Post Design</option>
              <option value="print-design">Business Cards</option>
              <option value="video-design">YouTube Thumbnails</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              rows={3}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Technologies (comma-separated)</label>
            <input
              type="text"
              value={Array.isArray(formData.technologies) ? formData.technologies.join(', ') : formData.technologies}
              onChange={(e) => setFormData({...formData, technologies: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Demo URL</label>
              <input
                type="url"
                value={formData.demoUrl}
                onChange={(e) => setFormData({...formData, demoUrl: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">GitHub URL</label>
              <input
                type="url"
                value={formData.githubUrl}
                onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              />
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({...formData, featured: e.target.checked})}
              className="mr-2"
            />
            <label htmlFor="featured" className="text-sm text-gray-300">Featured Project</label>
          </div>
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              <Save size={18} />
              <span>Save</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Testimonial Edit Modal Component
const TestimonialEditModal = ({ testimonial, onSave, onClose }) => {
  const [formData, setFormData] = useState(testimonial);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-60 p-4">
      <div className="bg-gray-800 p-6 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-bold text-white mb-4">Edit Testimonial</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Client Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Position</label>
            <input
              type="text"
              value={formData.position}
              onChange={(e) => setFormData({...formData, position: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Avatar URL</label>
            <input
              type="url"
              value={formData.avatar}
              onChange={(e) => setFormData({...formData, avatar: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Rating</label>
            <select
              value={formData.rating}
              onChange={(e) => setFormData({...formData, rating: parseInt(e.target.value)})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
            >
              {[1,2,3,4,5].map(rating => (
                <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Testimonial Text</label>
            <textarea
              value={formData.text}
              onChange={(e) => setFormData({...formData, text: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              rows={4}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Project Name</label>
            <input
              type="text"
              value={formData.project}
              onChange={(e) => setFormData({...formData, project: e.target.value})}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              required
            />
          </div>
          <div className="flex space-x-4 pt-4">
            <button
              type="submit"
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              <Save size={18} />
              <span>Save</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;