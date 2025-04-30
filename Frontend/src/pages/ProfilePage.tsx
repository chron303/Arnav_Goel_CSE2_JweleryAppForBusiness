
import { useState } from "react";
import Layout from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const ProfilePage = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const [userData, setUserData] = useState({
    name: "Your Name",
    email: "Name@example.com",
    phone: "+91 00000 00000",
    address: {
      street: "Main Street",
      city: "Sohna",
      state: "Haryana",
      zipCode: "000000"
    }
  });
  
  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
      duration: 3000,
    });
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      if (parent === 'address') {
        setUserData({
          ...userData,
          address: {
            ...userData.address,
            [child]: value
          }
        });
      }
    } else {
      setUserData({
        ...userData,
        [name]: value
      });
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6 bg-gold-light flex items-center space-x-4">
              <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center text-white text-2xl font-bold">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="text-xl font-bold">{userData.name}</h2>
                <p className="text-gray-600">{userData.email}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Personal Information</h3>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "Cancel" : "Edit Profile"}
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-600 mb-2">Full Name</label>
                    {isEditing ? (
                      <Input 
                        name="name"
                        value={userData.name} 
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="font-medium">{userData.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2">Email Address</label>
                    {isEditing ? (
                      <Input 
                        name="email"
                        value={userData.email} 
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="font-medium">{userData.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2">Phone Number</label>
                    {isEditing ? (
                      <Input 
                        name="phone"
                        value={userData.phone} 
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="font-medium">{userData.phone}</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Address</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-600 mb-2">Street Address</label>
                    {isEditing ? (
                      <Input 
                        name="address.street"
                        value={userData.address.street} 
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="font-medium">{userData.address.street}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2">City</label>
                    {isEditing ? (
                      <Input 
                        name="address.city"
                        value={userData.address.city} 
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="font-medium">{userData.address.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2">State</label>
                    {isEditing ? (
                      <Input 
                        name="address.state"
                        value={userData.address.state} 
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="font-medium">{userData.address.state}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-600 mb-2">Zip Code</label>
                    {isEditing ? (
                      <Input 
                        name="address.zipCode"
                        value={userData.address.zipCode} 
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="font-medium">{userData.address.zipCode}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {isEditing && (
                <div className="mt-8 text-right">
                  <Button 
                    onClick={handleSave}
                    className="bg-gold hover:bg-gold-dark text-white"
                  >
                    Save Changes
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
