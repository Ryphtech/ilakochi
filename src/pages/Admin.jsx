import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'ilakochi2024';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('menu');
  const [menuItems, setMenuItems] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [chefProfile, setChefProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Form states
  const [menuForm, setMenuForm] = useState({
    name: '', description: '', price: '', category: 'appetizers', image_url: '', is_available: true, display_order: 0
  });
  const [galleryForm, setGalleryForm] = useState({
    title: '', category: 'food', image_url: '', display_order: 0
  });
  const [chefForm, setChefForm] = useState({
    name: '', description: '', image_url: ''
  });

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const fetchData = async (tab) => {
    setLoading(true);
    if (tab === 'menu') {
      const { data, error } = await supabase.from('menu_items').select('*').order('display_order');
      if (!error) setMenuItems(data || []);
    } else if (tab === 'gallery') {
      const { data, error } = await supabase.from('gallery_images').select('*').order('display_order');
      if (!error) setGalleryImages(data || []);
    } else if (tab === 'chef') {
      const { data, error } = await supabase.from('chef_profile').select('*').limit(1).maybeSingle();
      if (!error && data) {
        setChefProfile(data);
        setChefForm({ name: data.name, description: data.description || '', image_url: data.image_url });
      }
    }
    setLoading(false);
  };

  // eslint-disable-next-line
  useEffect(() => {
    if (isAuthenticated) {
      fetchData(activeTab);
    }
  }, [isAuthenticated, activeTab]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      showMessage('Invalid password', 'error');
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${activeTab}/${fileName}`;

    const { error } = await supabase.storage.from('images').upload(filePath, file);
    if (error) {
      showMessage('Upload failed: ' + error.message, 'error');
      setUploading(false);
      return;
    }
    const { data: { publicUrl } } = supabase.storage.from('images').getPublicUrl(filePath);
    if (activeTab === 'menu') {
      setMenuForm(prev => ({ ...prev, image_url: publicUrl }));
    } else if (activeTab === 'gallery') {
      setGalleryForm(prev => ({ ...prev, image_url: publicUrl }));
    } else if (activeTab === 'chef') {
      setChefForm(prev => ({ ...prev, image_url: publicUrl }));
    }
    setUploading(false);
    showMessage('Image uploaded!');
  };

  // Menu CRUD
  const handleMenuSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...menuForm, price: parseFloat(menuForm.price), display_order: parseInt(menuForm.display_order) || 0 };
    
    if (editingItem) {
      const { error } = await supabase.from('menu_items').update(payload).eq('id', editingItem.id);
      if (error) showMessage('Error updating: ' + error.message, 'error');
      else showMessage('Menu item updated!');
    } else {
      const { error } = await supabase.from('menu_items').insert(payload);
      if (error) showMessage('Error adding: ' + error.message, 'error');
      else showMessage('Menu item added!');
    }
    resetForm();
    fetchData(activeTab);
    setLoading(false);
  };

  const handleDeleteMenu = async (id) => {
    if (!confirm('Delete this menu item?')) return;
    const { error } = await supabase.from('menu_items').delete().eq('id', id);
    if (error) showMessage('Error: ' + error.message, 'error');
    else { showMessage('Deleted!'); fetchData(activeTab); }
  };

  // Gallery CRUD
  const handleGallerySubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const payload = { ...galleryForm, display_order: parseInt(galleryForm.display_order) || 0 };
    
    if (editingItem) {
      const { error } = await supabase.from('gallery_images').update(payload).eq('id', editingItem.id);
      if (error) showMessage('Error updating: ' + error.message, 'error');
      else showMessage('Gallery image updated!');
    } else {
      const { error } = await supabase.from('gallery_images').insert(payload);
      if (error) showMessage('Error adding: ' + error.message, 'error');
      else showMessage('Gallery image added!');
    }
    resetForm();
    fetchData(activeTab);
    setLoading(false);
  };

  const handleDeleteGallery = async (id) => {
    if (!confirm('Delete this gallery image?')) return;
    const { error } = await supabase.from('gallery_images').delete().eq('id', id);
    if (error) showMessage('Error: ' + error.message, 'error');
    else { showMessage('Deleted!'); fetchData(activeTab); }
  };

  const handleChefSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (chefProfile) {
      const { error } = await supabase.from('chef_profile').update(chefForm).eq('id', chefProfile.id);
      if (error) showMessage('Error updating: ' + error.message, 'error');
      else showMessage('Chef profile updated!');
    } else {
      const { error } = await supabase.from('chef_profile').insert(chefForm);
      if (error) showMessage('Error adding: ' + error.message, 'error');
      else showMessage('Chef profile added!');
    }
    fetchData('chef');
    setLoading(false);
  };

  const startEdit = (item) => {
    setEditingItem(item);
    setShowForm(true);
    if (activeTab === 'menu') {
      setMenuForm({ name: item.name, description: item.description || '', price: item.price.toString(), category: item.category, image_url: item.image_url || '', is_available: item.is_available, display_order: item.display_order || 0 });
    } else {
      setGalleryForm({ title: item.title, category: item.category, image_url: item.image_url, display_order: item.display_order || 0 });
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditingItem(null);
    setMenuForm({ name: '', description: '', price: '', category: 'appetizers', image_url: '', is_available: true, display_order: 0 });
    setGalleryForm({ title: '', category: 'food', image_url: '', display_order: 0 });
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d1a0d] px-4">
        <div className="w-full max-w-md p-8 bg-[#15271f] border border-[#213e31] rounded-2xl shadow-2xl">
          <div className="text-center mb-8">
            <span className="material-symbols-outlined text-primary text-4xl">admin_panel_settings</span>
            <h1 className="text-2xl font-bold text-white mt-4">Ila Kochi Admin</h1>
            <p className="text-slate-400 text-sm mt-2">Enter your admin password to continue</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button type="submit" className="w-full bg-primary text-[#0d1a0d] font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors">
              Login
            </button>
          </form>
          {message.text && (
            <p className={`mt-4 text-center text-sm ${message.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>{message.text}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1a0d] text-white">
      {/* Header */}
      <div className="bg-[#15271f] border-b border-[#213e31] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">admin_panel_settings</span>
            <h1 className="text-xl font-bold">Ila Kochi Admin</h1>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-slate-400 hover:text-white text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-[18px]">logout</span> Logout
          </button>
        </div>
      </div>

      {/* Toast Message */}
      {message.text && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-xl shadow-2xl text-sm font-bold ${message.type === 'error' ? 'bg-red-500/90 text-white' : 'bg-green-500/90 text-white'}`}>
          {message.text}
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => { setActiveTab('menu'); resetForm(); }}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'menu' ? 'bg-primary text-[#0d1a0d]' : 'bg-[#15271f] border border-[#213e31] text-slate-300 hover:text-white'}`}
          >
            <span className="material-symbols-outlined text-[18px] mr-2 align-middle">restaurant_menu</span>
            Menu Items ({menuItems.length})
          </button>
          <button
            onClick={() => { setActiveTab('gallery'); resetForm(); }}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'gallery' ? 'bg-primary text-[#0d1a0d]' : 'bg-[#15271f] border border-[#213e31] text-slate-300 hover:text-white'}`}
          >
            <span className="material-symbols-outlined text-[18px] mr-2 align-middle">photo_library</span>
            Gallery ({galleryImages.length})
          </button>
          <button
            onClick={() => { setActiveTab('chef'); resetForm(); }}
            className={`px-6 py-3 rounded-xl font-bold text-sm transition-all ${activeTab === 'chef' ? 'bg-primary text-[#0d1a0d]' : 'bg-[#15271f] border border-[#213e31] text-slate-300 hover:text-white'}`}
          >
            <span className="material-symbols-outlined text-[18px] mr-2 align-middle">person</span>
            Chef Profile
          </button>
        </div>

        {/* Add Button */}
        {activeTab !== 'chef' && (
          <button
            onClick={() => { resetForm(); setShowForm(true); }}
            className="mb-6 bg-primary/10 border border-primary/30 text-primary px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary/20 transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[20px]">add_circle</span>
            Add {activeTab === 'menu' ? 'Menu Item' : 'Gallery Image'}
          </button>
        )}

        {/* Form */}
        {(showForm || activeTab === 'chef') && (
          <div className="bg-[#15271f] border border-[#213e31] rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold">{activeTab === 'chef' ? 'Manage Chef Profile' : editingItem ? 'Edit' : 'Add'} {activeTab === 'menu' ? 'Menu Item' : activeTab === 'gallery' ? 'Gallery Image' : ''}</h2>
              {activeTab !== 'chef' && (
                <button onClick={resetForm} className="text-slate-400 hover:text-white">
                  <span className="material-symbols-outlined">close</span>
                </button>
              )}
            </div>

            {activeTab === 'menu' ? (
              <form onSubmit={handleMenuSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Name *</label>
                    <input required value={menuForm.name} onChange={e => setMenuForm(p => ({...p, name: e.target.value}))} className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Price (₹) *</label>
                    <input required type="number" step="0.01" value={menuForm.price} onChange={e => setMenuForm(p => ({...p, price: e.target.value}))} className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Category *</label>
                    <select value={menuForm.category} onChange={e => setMenuForm(p => ({...p, category: e.target.value}))} className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm">
                      <option value="appetizers">Appetizers</option>
                      <option value="main">Main Dishes</option>
                      <option value="seafood">Seafood</option>
                      <option value="desserts">Desserts</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Display Order</label>
                    <input type="number" value={menuForm.display_order} onChange={e => setMenuForm(p => ({...p, display_order: e.target.value}))} className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Description</label>
                  <textarea value={menuForm.description} onChange={e => setMenuForm(p => ({...p, description: e.target.value}))} rows="2" className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm resize-none" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Image</label>
                  <div className="flex gap-3 items-end">
                    <input value={menuForm.image_url} onChange={e => setMenuForm(p => ({...p, image_url: e.target.value}))} placeholder="Image URL or upload below" className="flex-1 bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm" />
                    <label className={`cursor-pointer bg-[#213e31] px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-[#2a5040] transition-colors ${uploading ? 'opacity-50' : ''}`}>
                      {uploading ? 'Uploading...' : 'Upload'}
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
                    </label>
                  </div>
                  {menuForm.image_url && <img src={menuForm.image_url} alt="Preview" className="mt-3 w-20 h-20 object-cover rounded-lg border border-[#213e31]" />}
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="available" checked={menuForm.is_available} onChange={e => setMenuForm(p => ({...p, is_available: e.target.checked}))} className="rounded bg-[#0a130f] border-[#213e31] text-primary focus:ring-primary" />
                  <label htmlFor="available" className="text-sm text-slate-300">Available</label>
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="submit" disabled={loading} className="bg-primary text-[#0d1a0d] font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50">
                    {editingItem ? 'Update' : 'Add'} Item
                  </button>
                  <button type="button" onClick={resetForm} className="border border-[#213e31] px-6 py-3 rounded-xl text-slate-400 hover:text-white transition-colors">Cancel</button>
                </div>
              </form>
            ) : activeTab === 'gallery' ? (
              <form onSubmit={handleGallerySubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Title *</label>
                    <input required value={galleryForm.title} onChange={e => setGalleryForm(p => ({...p, title: e.target.value}))} className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Category *</label>
                    <select value={galleryForm.category} onChange={e => setGalleryForm(p => ({...p, category: e.target.value}))} className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm">
                      <option value="food">Food</option>
                      <option value="ambience">Ambience</option>
                      <option value="people">People</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Display Order</label>
                  <input type="number" value={galleryForm.display_order} onChange={e => setGalleryForm(p => ({...p, display_order: e.target.value}))} className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm md:w-1/2" />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Image *</label>
                  <div className="flex gap-3 items-end">
                    <input required value={galleryForm.image_url} onChange={e => setGalleryForm(p => ({...p, image_url: e.target.value}))} placeholder="Image URL or upload below" className="flex-1 bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm" />
                    <label className={`cursor-pointer bg-[#213e31] px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-[#2a5040] transition-colors ${uploading ? 'opacity-50' : ''}`}>
                      {uploading ? 'Uploading...' : 'Upload'}
                      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
                    </label>
                  </div>
                  {galleryForm.image_url && <img src={galleryForm.image_url} alt="Preview" className="mt-3 w-20 h-20 object-cover rounded-lg border border-[#213e31]" />}
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="submit" disabled={loading} className="bg-primary text-[#0d1a0d] font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50">
                    {editingItem ? 'Update' : 'Add'} Image
                  </button>
                  <button type="button" onClick={resetForm} className="border border-[#213e31] px-6 py-3 rounded-xl text-slate-400 hover:text-white transition-colors">Cancel</button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleChefSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Name *</label>
                    <input required value={chefForm.name} onChange={e => setChefForm(p => ({...p, name: e.target.value}))} className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm text-slate-400 mb-1">Image *</label>
                    <div className="flex gap-3 items-end">
                      <input required value={chefForm.image_url} onChange={e => setChefForm(p => ({...p, image_url: e.target.value}))} placeholder="Image URL or upload below" className="flex-1 bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm" />
                      <label className={`cursor-pointer bg-[#213e31] px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-[#2a5040] transition-colors ${uploading ? 'opacity-50' : ''}`}>
                        {uploading ? 'Uploading...' : 'Upload'}
                        <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
                      </label>
                    </div>
                    {chefForm.image_url && <img src={chefForm.image_url} alt="Preview" className="mt-3 w-20 h-20 object-cover rounded-lg border border-[#213e31]" />}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1">Bio Description *</label>
                  <textarea required value={chefForm.description} onChange={e => setChefForm(p => ({...p, description: e.target.value}))} rows="4" className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-2.5 text-white focus:ring-2 focus:ring-primary/50 focus:outline-none text-sm resize-none" />
                </div>
                <div className="flex gap-3 pt-2">
                  <button type="submit" disabled={loading} className="bg-primary text-[#0d1a0d] font-bold px-8 py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50">
                    Save Chef Profile
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Data Table */}
        {activeTab === 'chef' ? null : loading && !showForm ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full"></div>
          </div>
        ) : activeTab === 'menu' ? (
          <div className="space-y-3">
            {menuItems.map(item => (
              <div key={item.id} className="bg-[#15271f] border border-[#213e31] rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors">
                {item.image_url && (
                  <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover rounded-lg border border-[#213e31] flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-white truncate">{item.name}</h3>
                    {!item.is_available && <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-bold">Unavailable</span>}
                  </div>
                  <p className="text-sm text-slate-400 truncate">{item.description}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-primary font-bold text-sm">₹{item.price}</span>
                    <span className="text-slate-500 text-xs bg-[#0a130f] px-2 py-0.5 rounded capitalize">{item.category}</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <button onClick={() => startEdit(item)} className="p-2 rounded-lg bg-[#0a130f] hover:bg-primary/10 text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                  </button>
                  <button onClick={() => handleDeleteMenu(item.id)} className="p-2 rounded-lg bg-[#0a130f] hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors">
                    <span className="material-symbols-outlined text-[18px]">delete</span>
                  </button>
                </div>
              </div>
            ))}
            {menuItems.length === 0 && <p className="text-center text-slate-500 py-12">No menu items yet. Add your first item!</p>}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map(img => (
              <div key={img.id} className="bg-[#15271f] border border-[#213e31] rounded-xl overflow-hidden group hover:border-primary/30 transition-colors">
                <div className="aspect-square overflow-hidden">
                  <img src={img.image_url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="p-3">
                  <h3 className="font-bold text-white text-sm truncate">{img.title}</h3>
                  <span className="text-slate-500 text-xs capitalize">{img.category}</span>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => startEdit(img)} className="flex-1 py-1.5 rounded-lg bg-[#0a130f] text-slate-400 hover:text-primary text-xs font-bold transition-colors">Edit</button>
                    <button onClick={() => handleDeleteGallery(img.id)} className="flex-1 py-1.5 rounded-lg bg-[#0a130f] text-slate-400 hover:text-red-400 text-xs font-bold transition-colors">Delete</button>
                  </div>
                </div>
              </div>
            ))}
            {galleryImages.length === 0 && <p className="col-span-full text-center text-slate-500 py-12">No gallery images yet. Add your first image!</p>}
          </div>
        )}
      </div>
    </div>
  );
}
