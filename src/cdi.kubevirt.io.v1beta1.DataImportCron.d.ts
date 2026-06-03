/** Generated from Remote JSON Schema for cdi.kubevirt.io.v1beta1.DataImportCron */

/**
 * DataImportCron defines a cron job for recurring polling/importing disk images as PVCs into a golden image namespace
 */
export interface CdiKubevirtIoV1Beta1DataImportCron {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * DataImportCronSpec defines specification for DataImportCron
   */
  spec: {
    /**
     * GarbageCollect specifies whether old PVCs should be cleaned up after a new PVC is imported.
     * Options are currently "Outdated" and "Never", defaults to "Outdated".
     */
    garbageCollect?: string;
    /**
     * Number of import PVCs to keep when garbage collecting. Default is 3.
     */
    importsToKeep?: number;
    /**
     * ManagedDataSource specifies the name of the corresponding DataSource this cron will manage.
     * DataSource has to be in the same namespace.
     */
    managedDataSource: string;
    /**
     * RetentionPolicy specifies whether the created DataVolumes and DataSources are retained when their DataImportCron is deleted. Default is RatainAll.
     */
    retentionPolicy?: string;
    /**
     * Schedule specifies in cron format when and how often to look for new imports
     */
    schedule: string;
    /**
     * ServiceAccountName is the name of the ServiceAccount for creating DataVolumes.
     */
    serviceAccountName?: string;
    /**
     * Template specifies template for the DVs to be created
     */
    template: {
      /**
       * APIVersion defines the versioned schema of this representation of an object.
       * Servers should convert recognized schemas to the latest internal value, and
       * may reject unrecognized values.
       * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
       */
      apiVersion?: string;
      /**
       * Kind is a string value representing the REST resource this object represents.
       * Servers may infer this from the endpoint the client submits requests to.
       * Cannot be updated.
       * In CamelCase.
       * More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind?: string;
      metadata?: {
        [k: string]: unknown;
      };
      /**
       * DataVolumeSpec defines the DataVolume type specification
       */
      spec: {
        /**
         * Checkpoints is a list of DataVolumeCheckpoints, representing stages in a multistage import.
         */
        checkpoints?: {
          /**
           * Current is the identifier of the snapshot created for this checkpoint.
           */
          current: string;
          /**
           * Previous is the identifier of the snapshot from the previous checkpoint.
           */
          previous: string;
          [k: string]: unknown;
        }[];
        /**
         * DataVolumeContentType options: "kubevirt", "archive"
         */
        contentType?: 'kubevirt' | 'archive';
        /**
         * FinalCheckpoint indicates whether the current DataVolumeCheckpoint is the final checkpoint.
         */
        finalCheckpoint?: boolean;
        /**
         * Preallocation controls whether storage for DataVolumes should be allocated in advance.
         */
        preallocation?: boolean;
        /**
         * PriorityClassName for Importer, Cloner and Uploader pod
         */
        priorityClassName?: string;
        /**
         * PVC is the PVC specification
         */
        pvc?: {
          /**
           * accessModes contains the desired access modes the volume should have.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
           */
          accessModes?: string[];
          /**
           * dataSource field can be used to specify either:
           * * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot)
           * * An existing PVC (PersistentVolumeClaim)
           * If the provisioner or an external controller can support the specified data source,
           * it will create a new volume based on the contents of the specified data source.
           * When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef,
           * and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified.
           * If the namespace is specified, then dataSourceRef will not be copied to dataSource.
           */
          dataSource?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            [k: string]: unknown;
          };
          /**
           * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty
           * volume is desired. This may be any object from a non-empty API group (non
           * core object) or a PersistentVolumeClaim object.
           * When this field is specified, volume binding will only succeed if the type of
           * the specified object matches some installed volume populator or dynamic
           * provisioner.
           * This field will replace the functionality of the dataSource field and as such
           * if both fields are non-empty, they must have the same value. For backwards
           * compatibility, when namespace isn't specified in dataSourceRef,
           * both fields (dataSource and dataSourceRef) will be set to the same
           * value automatically if one of them is empty and the other is non-empty.
           * When namespace is specified in dataSourceRef,
           * dataSource isn't set to the same value and must be empty.
           * There are three important differences between dataSource and dataSourceRef:
           * * While dataSource only allows two specific types of objects, dataSourceRef
           *   allows any non-core object, as well as PersistentVolumeClaim objects.
           * * While dataSource ignores disallowed values (dropping them), dataSourceRef
           *   preserves all values, and generates an error if a disallowed value is
           *   specified.
           * * While dataSource only allows local objects, dataSourceRef allows objects
           *   in any namespaces.
           * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
           * (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
           */
          dataSourceRef?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: string;
            [k: string]: unknown;
          };
          /**
           * resources represents the minimum resources the volume should have.
           * If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements
           * that are lower than previous value but must still be higher than capacity recorded in the
           * status field of the claim.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
           */
          resources?: {
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: {
              [k: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: {
              [k: string]: number | string;
            };
            [k: string]: unknown;
          };
          /**
           * selector is a label query over volumes to consider for binding.
           */
          selector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: {
              /**
               * key is the label key that the selector applies to.
               */
              key: string;
              /**
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              operator: string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              values?: string[];
              [k: string]: unknown;
            }[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          /**
           * storageClassName is the name of the StorageClass required by the claim.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
           */
          storageClassName?: string;
          /**
           * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim.
           * If specified, the CSI driver will create or update the volume with the attributes defined
           * in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName,
           * it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass
           * will be applied to the claim but it's not allowed to reset this field to empty string once it is set.
           * If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass
           * will be set by the persistentvolume controller if it exists.
           * If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be
           * set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource
           * exists.
           * More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/
           * (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
           */
          volumeAttributesClassName?: string;
          /**
           * volumeMode defines what type of volume is required by the claim.
           * Value of Filesystem is implied when not included in claim spec.
           */
          volumeMode?: string;
          /**
           * volumeName is the binding reference to the PersistentVolume backing this claim.
           */
          volumeName?: string;
          [k: string]: unknown;
        };
        /**
         * ServiceAccountName for Importer and Uploader pod
         */
        serviceAccountName?: string;
        /**
         * Source is the src of the data for the requested DataVolume
         */
        source?: {
          /**
           * DataVolumeBlankImage provides the parameters to create a new raw blank image for the PVC
           */
          blank?: {
            [k: string]: unknown;
          };
          /**
           * DataVolumeSourceGCS provides the parameters to create a Data Volume from an GCS source
           */
          gcs?: {
            /**
             * SecretRef provides the secret reference needed to access the GCS source
             */
            secretRef?: string;
            /**
             * URL is the url of the GCS source
             */
            url: string;
            [k: string]: unknown;
          };
          /**
           * DataVolumeSourceHTTP can be either an http or https endpoint, with an optional basic auth user name and password, and an optional configmap containing additional CAs
           */
          http?: {
            /**
             * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
             */
            certConfigMap?: string;
            /**
             * Checksum is the expected checksum of the file. Format: "algorithm:hash", e.g., "sha256:1234abcd..." or "md5:5678efgh..."
             * Supported algorithms: md5, sha1, sha256, sha512
             * If specified, the importer will verify the downloaded content matches this checksum
             */
            checksum?: string;
            /**
             * ExtraHeaders is a list of strings containing extra headers to include with HTTP transfer requests
             */
            extraHeaders?: string[];
            /**
             * SecretExtraHeaders is a list of Secret references, each containing an extra HTTP header that may include sensitive information
             */
            secretExtraHeaders?: string[];
            /**
             * SecretRef A Secret reference, the secret should contain accessKeyId (user name) base64 encoded, and secretKey (password) also base64 encoded
             */
            secretRef?: string;
            /**
             * URL is the URL of the http(s) endpoint
             */
            url: string;
            [k: string]: unknown;
          };
          /**
           * DataVolumeSourceImageIO provides the parameters to create a Data Volume from an imageio source
           */
          imageio?: {
            /**
             * CertConfigMap provides a reference to the CA cert
             */
            certConfigMap?: string;
            /**
             * DiskID provides id of a disk to be imported
             */
            diskId: string;
            /**
             * InsecureSkipVerify is a flag to skip certificate verification
             */
            insecureSkipVerify?: boolean;
            /**
             * SecretRef provides the secret reference needed to access the ovirt-engine
             */
            secretRef?: string;
            /**
             * URL is the URL of the ovirt-engine
             */
            url: string;
            [k: string]: unknown;
          };
          /**
           * DataVolumeSourcePVC provides the parameters to create a Data Volume from an existing PVC
           */
          pvc?: {
            /**
             * The name of the source PVC
             */
            name: string;
            /**
             * The namespace of the source PVC
             */
            namespace: string;
            [k: string]: unknown;
          };
          /**
           * DataVolumeSourceRegistry provides the parameters to create a Data Volume from an registry source
           */
          registry?: {
            /**
             * CertConfigMap provides a reference to the Registry certs
             */
            certConfigMap?: string;
            /**
             * ImageStream is the name of image stream for import
             */
            imageStream?: string;
            /**
             * Platform describes the minimum runtime requirements of the image
             */
            platform?: {
              /**
               * Architecture specifies the image target CPU architecture
               */
              architecture?: string;
              [k: string]: unknown;
            };
            /**
             * PullMethod can be either "pod" (default import), or "node" (node docker cache based import)
             */
            pullMethod?: string;
            /**
             * SecretRef provides the secret reference needed to access the Registry source
             */
            secretRef?: string;
            /**
             * URL is the url of the registry source (starting with the scheme: docker, oci-archive)
             */
            url?: string;
            [k: string]: unknown;
          };
          /**
           * DataVolumeSourceS3 provides the parameters to create a Data Volume from an S3 source
           */
          s3?: {
            /**
             * CertConfigMap is a configmap reference, containing a Certificate Authority(CA) public key, and a base64 encoded pem certificate
             */
            certConfigMap?: string;
            /**
             * SecretRef provides the secret reference needed to access the S3 source
             */
            secretRef?: string;
            /**
             * URL is the url of the S3 source
             */
            url: string;
            [k: string]: unknown;
          };
          /**
           * DataVolumeSourceSnapshot provides the parameters to create a Data Volume from an existing VolumeSnapshot
           */
          snapshot?: {
            /**
             * The name of the source VolumeSnapshot
             */
            name: string;
            /**
             * The namespace of the source VolumeSnapshot
             */
            namespace: string;
            [k: string]: unknown;
          };
          /**
           * DataVolumeSourceUpload provides the parameters to create a Data Volume by uploading the source
           */
          upload?: {
            [k: string]: unknown;
          };
          /**
           * DataVolumeSourceVDDK provides the parameters to create a Data Volume from a Vmware source
           */
          vddk?: {
            /**
             * BackingFile is the path to the virtual hard disk to migrate from vCenter/ESXi
             */
            backingFile?: string;
            /**
             * ExtraArgs is a reference to a ConfigMap containing extra arguments to pass directly to the VDDK library
             */
            extraArgs?: string;
            /**
             * InitImageURL is an optional URL to an image containing an extracted VDDK library, overrides v2v-vmware config map
             */
            initImageURL?: string;
            /**
             * SecretRef provides a reference to a secret containing the username and password needed to access the vCenter or ESXi host
             */
            secretRef?: string;
            /**
             * Thumbprint is the certificate thumbprint of the vCenter or ESXi host
             */
            thumbprint?: string;
            /**
             * URL is the URL of the vCenter or ESXi host with the VM to migrate
             */
            url?: string;
            /**
             * UUID is the UUID of the virtual machine that the backing file is attached to in vCenter/ESXi
             */
            uuid?: string;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        /**
         * SourceRef is an indirect reference to the source of data for the requested DataVolume
         */
        sourceRef?: {
          /**
           * The kind of the source reference, currently only "DataSource" is supported
           */
          kind: string;
          /**
           * The name of the source reference
           */
          name: string;
          /**
           * The namespace of the source reference, defaults to the DataVolume namespace
           */
          namespace?: string;
          [k: string]: unknown;
        };
        /**
         * Storage is the requested storage specification
         */
        storage?: {
          /**
           * AccessModes contains the desired access modes the volume should have.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
           */
          accessModes?: string[];
          /**
           * This field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) * An existing custom resource that implements data population (Alpha) In order to use custom resource types that implement data population, the AnyVolumeDataSource feature gate must be enabled. If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source.
           * If the AnyVolumeDataSource feature gate is enabled, this field will always have the same contents as the DataSourceRef field.
           */
          dataSource?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            [k: string]: unknown;
          };
          /**
           * Specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any local object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner.
           * This field will replace the functionality of the DataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, both fields (DataSource and DataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty.
           * There are two important differences between DataSource and DataSourceRef:
           * * While DataSource only allows two specific types of objects, DataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects.
           * * While DataSource ignores disallowed values (dropping them), DataSourceRef preserves all values, and generates an error if a disallowed value is specified.
           * (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled.
           */
          dataSourceRef?: {
            /**
             * APIGroup is the group for the resource being referenced.
             * If APIGroup is not specified, the specified Kind must be in the core API group.
             * For any other third-party types, APIGroup is required.
             */
            apiGroup?: string;
            /**
             * Kind is the type of resource being referenced
             */
            kind: string;
            /**
             * Name is the name of resource being referenced
             */
            name: string;
            /**
             * Namespace is the namespace of resource being referenced
             * Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details.
             * (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
             */
            namespace?: string;
            [k: string]: unknown;
          };
          /**
           * Resources represents the minimum resources the volume should have.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
           */
          resources?: {
            /**
             * Limits describes the maximum amount of compute resources allowed.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            limits?: {
              [k: string]: number | string;
            };
            /**
             * Requests describes the minimum amount of compute resources required.
             * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
             * otherwise to an implementation-defined value. Requests cannot exceed Limits.
             * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
             */
            requests?: {
              [k: string]: number | string;
            };
            [k: string]: unknown;
          };
          /**
           * A label query over volumes to consider for binding.
           */
          selector?: {
            /**
             * matchExpressions is a list of label selector requirements. The requirements are ANDed.
             */
            matchExpressions?: {
              /**
               * key is the label key that the selector applies to.
               */
              key: string;
              /**
               * operator represents a key's relationship to a set of values.
               * Valid operators are In, NotIn, Exists and DoesNotExist.
               */
              operator: string;
              /**
               * values is an array of string values. If the operator is In or NotIn,
               * the values array must be non-empty. If the operator is Exists or DoesNotExist,
               * the values array must be empty. This array is replaced during a strategic
               * merge patch.
               */
              values?: string[];
              [k: string]: unknown;
            }[];
            /**
             * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels
             * map is equivalent to an element of matchExpressions, whose key field is "key", the
             * operator is "In", and the values array contains only "value". The requirements are ANDed.
             */
            matchLabels?: {
              [k: string]: string;
            };
            [k: string]: unknown;
          };
          /**
           * Name of the StorageClass required by the claim.
           * More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
           */
          storageClassName?: string;
          /**
           * volumeMode defines what type of volume is required by the claim.
           * Value of Filesystem is implied when not included in claim spec.
           */
          volumeMode?: string;
          /**
           * VolumeName is the binding reference to the PersistentVolume backing this claim.
           */
          volumeName?: string;
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      /**
       * DataVolumeStatus contains the current status of the DataVolume
       */
      status?: {
        /**
         * ClaimName is the name of the underlying PVC used by the DataVolume.
         */
        claimName?: string;
        conditions?: {
          lastHeartbeatTime?: string;
          lastTransitionTime?: string;
          message?: string;
          reason?: string;
          status: string;
          /**
           * DataVolumeConditionType is the string representation of known condition types
           */
          type: string;
          [k: string]: unknown;
        }[];
        /**
         * Phase is the current phase of the data volume
         */
        phase?: string;
        /**
         * DataVolumeProgress is the current progress of the DataVolume transfer operation. Value between 0 and 100 inclusive, N/A if not available
         */
        progress?: string;
        /**
         * RestartCount is the number of times the pod populating the DataVolume has restarted
         */
        restartCount?: number;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * DataImportCronStatus provides the most recently observed status of the DataImportCron
   */
  status?: {
    conditions?: {
      lastHeartbeatTime?: string;
      lastTransitionTime?: string;
      message?: string;
      reason?: string;
      status: string;
      /**
       * DataImportCronConditionType is the string representation of known condition types
       */
      type: string;
      [k: string]: unknown;
    }[];
    /**
     * CurrentImports are the imports in progress. Currently only a single import is supported.
     */
    currentImports?: {
      /**
       * DataVolumeName is the currently in progress import DataVolume
       */
      DataVolumeName: string;
      /**
       * Digest of the currently imported image
       */
      Digest: string;
      [k: string]: unknown;
    }[];
    /**
     * LastExecutionTimestamp is the time of the last polling
     */
    lastExecutionTimestamp?: string;
    /**
     * LastImportTimestamp is the time of the last import
     */
    lastImportTimestamp?: string;
    /**
     * LastImportedPVC is the last imported PVC
     */
    lastImportedPVC?: {
      /**
       * The name of the source PVC
       */
      name: string;
      /**
       * The namespace of the source PVC
       */
      namespace: string;
      [k: string]: unknown;
    };
    /**
     * SourceFormat defines the format of the DataImportCron-created disk image sources
     */
    sourceFormat?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
